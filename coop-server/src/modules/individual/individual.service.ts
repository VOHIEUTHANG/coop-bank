import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Individual } from './entity/individual.entity';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterIndividualDto } from './dto/filter-individual.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { transformDate } from 'src/utils/date.util';
import { FileService } from 'src/helper/file.helper';

@Injectable()
export class IndividualService {
  constructor(
    @InjectRepository(Individual) private repo: Repository<Individual>,
    private readonly fileService: FileService
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

    data.birth_date = transformDate(data.birth_date);
    data.id_issued_date = transformDate(data.id_issued_date);

    this.fileService.saveFileField(data, 'id_front_image');
    this.fileService.saveFileField(data, 'id_back_image');
    this.fileService.saveFileField(data, 'salary_file');
    this.fileService.saveFileField(data, 'marriage_file');
    this.fileService.saveFileField(data, 'appoint_file');

    Object.assign(newData, data);

    const individual = this.repo.create(newData);
    return this.repo.save(individual);
  }

  async findOne(individual_id: string) {
    const object = await this.repo.findOneBy({ individual_id });
    if (!object) {
      throw new NotFoundException('Không tìm thấy cá nhân vây vốn !');
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
}
