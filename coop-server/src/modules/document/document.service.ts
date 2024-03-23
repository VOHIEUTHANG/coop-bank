import { Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Document } from './entity/document.entity';
import { CreateDocumentDto } from './dto/create-document.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterDocumentDto } from './dto/filter-document-unit.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { FileService } from 'src/helper/file.helper';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document) private repo: Repository<Document>,
    private readonly fileService: FileService
  ) {}

  async create(createData: CreateDocumentDto, user_id: number) {
    createData.document_id = generateId();
    createData.created_user = new User(user_id);

    createData.document_files?.forEach((file) => {
      this.fileService.saveFileField(file, 'document_file_url', 'pdf');
    });

    const document = this.repo.create(createData);
    return this.repo.save(document);
  }

  async findOne(document_id: string) {
    const document = await this.repo.findOneBy({ document_id });
    if (!document) {
      throw new NotFoundException('Không tìm thấy tài liệu !');
    }
    return document;
  }

  async find(filter: FilterDocumentDto, currentUser: User) {
    const queryBuilder = this.repo.createQueryBuilder('document');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb.where('document.document_name like :search', {
            search: `%${filter.search}%`
          })
        )
      )
      .andWhere(
        new Brackets((qb) =>
          qb.where(`${currentUser.is_admin} = 1`).orWhere(
            new Brackets((qbc) =>
              qbc
                .where(!!currentUser.branch.branch_id && 'user.branch_id = :branch_id', {
                  branch_id: currentUser.branch.branch_id
                })
                .andWhere(
                  currentUser?.transaction_room?.transaction_room_id
                    ? 'user.transaction_room_id = :transaction_room_id'
                    : 'user.transaction_room_id IS NULL',
                  {
                    transaction_room_id: currentUser?.transaction_room?.transaction_room_id
                  }
                )
            )
          )
        )
      )
      .andWhere(!!filter.created_date_from && 'document.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'document.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('document.created_user', 'user')
      .orderBy('document.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async update(updateData: Partial<Document>) {
    const document = await this.findOne(updateData.document_id);

    updateData.document_files?.forEach((file) => {
      this.fileService.saveFileField(file, 'document_file_url', 'pdf');
    });

    Object.assign(document, updateData);
    return this.repo.save(document);
  }

  async delete(id: string) {
    const document = await this.findOne(id);

    document.deleted_at = new Date().toISOString();
    return this.repo.save(document);
  }
}
