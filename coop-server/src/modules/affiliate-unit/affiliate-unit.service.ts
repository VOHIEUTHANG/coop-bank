import { Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AffiliateUnit } from './entity/affiliate-unit.entity';
import { CreateAffilicateUnitDto } from './dto/create-affiliate-unit.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterAffilicateUnitDto } from './dto/filter-affiliate-unit.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { transformDate } from 'src/utils/date.util';
import { FileService } from 'src/helper/file.helper';

import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';

@Injectable()
export class AffiliateUnitService {
  constructor(
    @InjectRepository(AffiliateUnit) private repo: Repository<AffiliateUnit>,
    private readonly fileService: FileService
  ) {}

  async create(createData: CreateAffilicateUnitDto, user_id: number) {
    createData.founding_date = transformDate(createData.founding_date);

    createData.affiliate_unit_id = generateId();
    createData.created_user = new User(user_id);

    this.fileService.saveFileField(createData, 'affiliate_unit_image_1');
    this.fileService.saveFileField(createData, 'affiliate_unit_image_2');
    this.fileService.saveFileField(createData, 'affiliate_unit_paycheck');

    const representative = this.repo.create(createData);
    return this.repo.save(representative);
  }

  async findOne(affiliate_unit_id: string) {
    const representative = await this.repo.findOneBy({ affiliate_unit_id });
    if (!representative) {
      throw new NotFoundException('Không tìm thấy đơn vị liên kết !');
    }
    return representative;
  }

  async find(filter: FilterAffilicateUnitDto) {
    const queryBuilder = this.repo.createQueryBuilder('affiliate_unit');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb
            .where('affiliate_unit.affiliate_unit_name like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('affiliate_unit.affiliate_unit_code like :search', {
              search: `%${filter.search}%`
            })
        )
      )
      .andWhere(!!filter.created_date_from && 'affiliate_unit.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'affiliate_unit.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('affiliate_unit.created_user', 'user')
      .orderBy('affiliate_unit.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async update(updateData: Partial<AffiliateUnit>) {
    const representative = await this.findOne(updateData.affiliate_unit_id);

    updateData.founding_date = transformDate(updateData.founding_date);

    this.fileService.saveFileField(updateData, 'affiliate_unit_image_1');
    this.fileService.saveFileField(updateData, 'affiliate_unit_image_2');
    this.fileService.saveFileField(updateData, 'affiliate_unit_paycheck');

    Object.assign(representative, updateData);
    return this.repo.save(representative);
  }

  async delete(id: string) {
    const branch = await this.findOne(id);

    branch.deleted_at = new Date().toISOString();
    return this.repo.save(branch);
  }

  async getOptions() {
    return this.repo
      .createQueryBuilder('affiliateUnit')
      .select([
        'affiliateUnit.affiliate_unit_id AS value',
        'affiliateUnit.affiliate_unit_name AS label'
      ])
      .getRawMany();
  }

  async exportForm(affiliateUnitId: string, formData: any): Promise<Buffer> {
    const affiliateData = await this.findOne(affiliateUnitId);
    console.log('🚀 ~ AffiliateUnitService ~ exportForm ~ affiliateData:', affiliateData);

    const data = {
      name: 'Thang Vo',
      email: 'thang@gmail.com'
      // Add more data properties as needed
    };
    // Read the Word template file
    const templateContent = fs.readFileSync(
      'src/template/doc/DVLK_hop_dong_dich_vu.docx',
      'binary'
    );

    // Create a PizZip object
    const zip = new PizZip(templateContent);

    // Create a docxtemplater instance
    const doc = new Docxtemplater(zip);

    // Set the data for the placeholders
    doc.setData(data);

    // Perform the templating
    doc.render();

    // Get the modified document as a Buffer
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });

    return buffer;
  }
}
