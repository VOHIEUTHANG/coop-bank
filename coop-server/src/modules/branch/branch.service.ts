import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from './branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterBranchDto } from './dto/filter-branch.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { UpdateBranchDto } from './dto/update-branch.dto';

@Injectable()
export class BranchService {
  constructor(@InjectRepository(Branch) private repo: Repository<Branch>) {}

  async create(branchData: CreateBranchDto, user_id: number) {
    const existedSameBranch = await this.repo.findOneBy({ branch_name: branchData.branch_name });

    if (existedSameBranch) {
      throw new BadRequestException(`Đã tồn tại chi nhánh với tên ${branchData.branch_name}`);
    }

    branchData.branch_id = generateId();
    branchData.created_user = new User(user_id);

    const branch = this.repo.create(branchData);
    return this.repo.save(branch);
  }

  async getOptions() {
    return this.repo
      .createQueryBuilder('branch')
      .select(['branch.branch_id AS value', 'branch.branch_name AS label'])
      .getRawMany();
  }

  async findOne(branch_id: string) {
    const branch = await this.repo.findOne({
      where: { branch_id },
      relations: ['bankRepresentatives']
    });
    if (!branch) {
      throw new NotFoundException('Không tìm thấy chi nhánh !');
    }
    return branch;
  }

  async find(filter: FilterBranchDto) {
    const queryBuilder = this.repo.createQueryBuilder('branch');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb
            .where('branch.branch_name like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('branch.phone_number_main like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('branch.phone_number_sub like :search', {
              search: `%${filter.search}%`
            })
        )
      )
      .andWhere(!!filter.created_date_from && 'branch.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'branch.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('branch.created_user', 'user')
      .orderBy('branch.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async update(attrs: UpdateBranchDto) {
    const branch = await this.findOne(attrs.branch_id);

    Object.assign(branch, attrs);
    return this.repo.save(branch);
  }

  async delete(branch_id: string) {
    const branch = await this.findOne(branch_id);

    branch.deleted_at = new Date().toISOString();
    return this.repo.save(branch);
  }
}
