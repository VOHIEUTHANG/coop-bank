import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Brackets, DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Individual } from './entity/individual.entity';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterIndividualDto } from './dto/filter-individual.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { transformDate } from 'src/utils/date.util';
import { FileService } from 'src/helper/file.helper';
import { AffiliateUnitService } from '../affiliate-unit/affiliate-unit.service';
import { AffiliateUnit } from '../affiliate-unit/entity/affiliate-unit.entity';

@Injectable()
export class IndividualService {
  constructor(
    @InjectRepository(Individual) private repo: Repository<Individual>,
    private readonly fileService: FileService,
    private affiliateUnitService: AffiliateUnitService,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  async createOrUpdate(data: Partial<Individual>, user_id?: number) {
    let newData = { ...data };

    if (data.individual_id) {
      newData = await this.findOne(data.individual_id);
    } else {
      // validate duplicate id number
      const existedSameIdNumber = await this.repo.findOneBy({ id_number: data.id_number });
      if (existedSameIdNumber) {
        throw new BadRequestException(`Đã tồn tại cá nhân vay vốn với số CCCD ${data.id_number}`);
      }
      newData.individual_id = generateId();
      newData.created_user = new User(user_id);
    }

    if (data.affiliate_unit_id) {
      data.affiliate_unit = new AffiliateUnit(data.affiliate_unit_id);
      delete data.affiliate_unit_id;
    }

    data.birth_date = transformDate(data.birth_date);
    data.heir_birth_date = transformDate(data.heir_birth_date);
    data.id_issued_date = transformDate(data.id_issued_date);

    this.fileService.saveFileField(data, 'id_front_image');
    this.fileService.saveFileField(data, 'id_back_image');

    data.individual_files?.forEach((file) => {
      this.fileService.saveFileField(file, 'individual_file_url');
    });

    Object.assign(newData, data);

    const individual = this.repo.create(newData);
    return this.repo.save(individual);
  }

  async getOptions() {
    const query = `
    SELECT
      id.individual_id AS value,
      id.individual_fullname AS label,
      id.individual_bank_number,
      id.individual_cic_score,
      id.individual_cic_rank,
      id.individual_cic,
      id.total_income,
      id.export_data,
      au.paid_date AS paid_date
    FROM
      individual id
      LEFT JOIN affiliate_unit au ON id.affiliate_unit_id = au.affiliate_unit_id 
      AND au.deleted_at IS NULL 
    WHERE
      id.deleted_at IS NULL
    `;
    const individualList = await this.dataSource.query(query, []);
    return individualList;
  }

  async findOne(individual_id: string, user?: any) {
    const object = await this.repo.findOneBy({ individual_id });
    if (!object) {
      throw new NotFoundException('Không tìm thấy cá nhân vây vốn !');
    }
    if (user?.interest_rate) {
      object.interest_rate = user?.interest_rate;
    }
    return object;
  }

  async find(filter: FilterIndividualDto) {
    const queryBuilder = this.repo.createQueryBuilder('individual');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb
            .where('individual.individual_fullname like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('individual.phone_number like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('individual.id_number like :search', {
              search: `%${filter.search}%`
            })
        )
      )
      .andWhere(!!filter.created_date_from && 'individual.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'individual.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('individual.created_user', 'user')
      .leftJoinAndSelect('individual.affiliate_unit', 'affiliate_unit')
      .orderBy('individual.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async delete(id: string) {
    const object = await this.findOne(id);

    object.deleted_at = new Date().toISOString();
    return this.repo.save(object);
  }

  async getIndividualData(individualId: string) {
    const query = `
    SELECT
      IV.individual_id,
      IV.individual_fullname,
      IV.phone_number,
      IV.current_address,
      IV.origin_address,
      IV.gender,
      IV.id_number,
      IV.id_issued_by,
      DATE_FORMAT( IV.id_issued_date, '%d/%m/%Y' ) AS id_issued_date,
      DATE_FORMAT( IV.birth_date, '%d/%m/%Y' ) AS birth_date,
      AU.affiliate_unit_address,
      AU.affiliate_unit_name,
      AU.paid_date
    FROM
      individual IV
      LEFT JOIN affiliate_unit AS AU ON AU.affiliate_unit_id = IV.affiliate_unit_id
    WHERE
      individual_id = ?
      AND IV.deleted_at IS NULL
    `;
    const [individual] = await this.dataSource.query(query, [individualId]);
    return individual;
  }
}
