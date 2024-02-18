import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BankRepresentative } from './bank-representative.entity';
import { CreateBankRepresentativeDto } from './dto/create-bank-representative.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterBankRepresentativeDto } from './dto/filter-bank-representative.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { transformDate } from 'src/utils/date.util';

@Injectable()
export class BankRepresentativeService {
  constructor(@InjectRepository(BankRepresentative) private repo: Repository<BankRepresentative>) {}

  async create(createData: CreateBankRepresentativeDto, user_id: number) {
    const existedSameIdNumber = await this.repo.findOneBy({
      id_number: createData.id_number
    });

    if (existedSameIdNumber) {
      throw new BadRequestException(
        `Đã tồn tại người đại diện với căn cước công dân số ${createData.id_number}`
      );
    }

    createData.bank_representative_id = generateId();
    createData.created_user = new User(user_id);

    createData.birth_date = transformDate(createData.birth_date);
    createData.id_issued_date = transformDate(createData.id_issued_date);

    const bankRepresentative = this.repo.create(createData);
    return this.repo.save(bankRepresentative);
  }

  async findOne(bank_representative_id: string) {
    const representative = await this.repo.findOneBy({ bank_representative_id });
    if (!representative) {
      throw new NotFoundException('Không tìm thấy người đại diện !');
    }
    return representative;
  }

  async find(filter: FilterBankRepresentativeDto) {
    const queryBuilder = this.repo.createQueryBuilder('bank_representative');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb
            .where('bank_representative.bank_representative_name like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('bank_representative.id_number like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('bank_representative.phone_number like :search', {
              search: `%${filter.search}%`
            })
        )
      )
      .andWhere(
        !!filter.created_date_from && 'bank_representative.created_at >= :created_date_from',
        {
          created_date_from: filter.created_date_from
        }
      )
      .andWhere(!!filter.created_date_to && 'bank_representative.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('bank_representative.created_user', 'user')
      .orderBy('bank_representative.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async update(updateData: Partial<BankRepresentative>) {
    const bankRepresentative = await this.findOne(updateData.bank_representative_id);

    updateData.birth_date = transformDate(updateData.birth_date);
    updateData.id_issued_date = transformDate(updateData.id_issued_date);

    Object.assign(bankRepresentative, updateData);
    return this.repo.save(bankRepresentative);
  }

  async delete(bank_representative_id: string) {
    const branch = await this.findOne(bank_representative_id);

    branch.deleted_at = new Date().toISOString();
    return this.repo.save(branch);
  }
}
