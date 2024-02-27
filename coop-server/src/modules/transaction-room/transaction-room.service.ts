import { Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTransactionRoomDto } from './dto/create-transaction-room.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterTransactionRoomDto } from './dto/filter-transaction-room.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { UpdateTransactionRoomDto } from './dto/update-transaction-room.dto';
import { TransactionRoom } from './transaction-room.entity';
import { Branch } from '../branch/branch.entity';

@Injectable()
export class TransactionRoomService {
  constructor(@InjectRepository(TransactionRoom) private repo: Repository<TransactionRoom>) {}

  async create(createData: CreateTransactionRoomDto, user_id: number) {
    createData.transaction_room_id = generateId();
    createData.created_user = new User(user_id);
    if (createData.branch_id) {
      createData.branch = new Branch(createData.branch_id);
    }
    const branch = this.repo.create(createData);
    return this.repo.save(branch);
  }

  async getOptions() {
    return this.repo
      .createQueryBuilder('transaction_room')
      .select([
        'transaction_room.transaction_room_id AS value',
        'transaction_room.transaction_room_name AS label'
      ])
      .getRawMany();
  }

  async findOne(transaction_room_id: string) {
    const transactionRoom = await this.repo.findOne({
      where: { transaction_room_id: transaction_room_id },
      relations: ['bankRepresentatives', 'branch']
    });
    if (!transactionRoom) {
      throw new NotFoundException('Không tìm thấy phòng giao dịch !');
    }
    return transactionRoom;
  }

  async find(filter: FilterTransactionRoomDto) {
    const queryBuilder = this.repo.createQueryBuilder('transaction_room');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb
            .where('transaction_room.transaction_room_name like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('transaction_room.phone_number_main like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('transaction_room.phone_number_sub like :search', {
              search: `%${filter.search}%`
            })
        )
      )
      .andWhere(!!filter.created_date_from && 'transaction_room.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'transaction_room.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('transaction_room.created_user', 'user')
      .orderBy('transaction_room.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async update(updateData: UpdateTransactionRoomDto) {
    const transactionRoom = await this.findOne(updateData.transaction_room_id);

    if (updateData.branch_id) {
      updateData.branch = new Branch(updateData.branch_id);
    }

    Object.assign(transactionRoom, updateData);
    return this.repo.save(transactionRoom);
  }

  async delete(transaction_room_id: string) {
    const branch = await this.findOne(transaction_room_id);

    branch.deleted_at = new Date().toISOString();
    return this.repo.save(branch);
  }
}
