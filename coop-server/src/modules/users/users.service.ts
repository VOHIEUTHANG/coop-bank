import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Branch } from '../branch/branch.entity';
import { ChangePasswordDto } from './dto/change-password.dto';
import PasswordHelper from 'src/helper/hash-password.helper';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private repo: Repository<User>,
    private dataSource: DataSource
  ) {}

  create(createUserDto: CreateUserDto) {
    const user = this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  async findOneByUsername(username: string) {
    const user = await this.repo.findOne({ where: { username }, relations: ['branch'] });
    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng !');
    }
    return user;
  }

  async findOneBy(condition: Partial<User>) {
    const user = await this.repo.findOne({ where: condition, relations: ['branch'] });
    if (!user) {
      throw new NotFoundException(`Không tìm thấy người dùng !`);
    }
    return user;
  }

  async find(filter: FilterUserDto) {
    const queryBuilder = this.repo.createQueryBuilder('user');

    queryBuilder
      .where(
        new Brackets((qb) => {
          qb.where('user.username like :search', {
            search: `%${filter.search}%`
          })
            .orWhere('user.full_name like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('user.email like :search', {
              search: `%${filter.search}%`
            });
        })
      )
      .andWhere(!!filter.created_date_from && 'user.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'user.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('user.branch', 'branch')
      .orderBy('user.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async update(updateData: UpdateUserDto) {
    const user = await this.findOneBy({ user_id: updateData.user_id });

    delete updateData.password;
    Object.assign(user, updateData);

    if (updateData.branch_id) {
      const branch = new Branch(updateData.branch_id);
      user.branch = branch;
    }

    return this.repo.save(user);
  }

  async updatePassword(updateData: ChangePasswordDto, userId: number) {
    const user = await this.findOneBy({ user_id: userId });

    const isMatchPassword = PasswordHelper.comparePassword(updateData.old_password, user.password);
    if (!isMatchPassword) {
      throw new BadRequestException('Mật khẩu cũ không chính xác');
    }
    user.password = PasswordHelper.hashPassword(updateData.new_password);

    return this.repo.save(user);
  }

  async lock(userId: number) {
    const user = await this.findOneBy({ user_id: userId });
    user.is_active = false;
    return this.repo.save(user);
  }

  async getOptions() {
    return this.repo
      .createQueryBuilder('user')
      .select(['user.user_id AS value', 'user.full_name AS label'])
      .getRawMany();
  }

  async demoTransaction() {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.save({});
      await queryRunner.manager.save({});

      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}
