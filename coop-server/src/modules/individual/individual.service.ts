import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Individual } from './entity/individual.entity';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterIndividualDto } from './dto/filter-individual.dto';
import { formatCurrency, generateId, readCurrency } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { transformDate } from 'src/utils/date.util';
import { FileService } from 'src/helper/file.helper';
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { AffiliateUnitService } from '../affiliate-unit/affiliate-unit.service';
import moment from 'moment';
import { AffiliateUnit } from '../affiliate-unit/entity/affiliate-unit.entity';
import { ExportFormIndividualDto } from './dto/export-form.dto';

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

  async saveExportData(individualId: string, exportData: any) {
    const individual = await this.findOne(individualId);
    individual.export_data = JSON.stringify(exportData);
    await this.repo.save(individual);
  }

  async getBaseExportData(
    individualId: string,
    exportData: ExportFormIndividualDto,
    userId: number
  ) {
    const branchData = await this.affiliateUnitService.getBranchData(userId);
    const individualData = await this.getIndividualData(individualId);

    const day = moment().date();
    const month = moment().month() + 1;
    const year = moment().year();

    let firstPayDay: number = individualData.paid_date;
    let firstPayMonth: number = month;
    let firstPayYear: number = year;

    if (day >= individualData.paid_date) {
      const firstPayDate = moment().add(1, 'month');
      firstPayDay = individualData.paid_date;
      firstPayMonth = firstPayDate.month() + 1;
      firstPayYear = firstPayDate.year();
    }

    return {
      ...branchData,
      ...individualData,
      ...exportData,
      branch_name_uc: branchData.branch_name.toUpperCase(),
      branch_province_uc: branchData.branch_province.toUpperCase(),
      day: `${day}`.padStart(2, '0'),
      month: `${month}`.padStart(2, '0'),
      year,
      paid_date: `${individualData.paid_date}`.padStart(2, '0'),
      year_end: year + exportData.duration,
      individual_fullname: individualData.individual_fullname.toUpperCase(),
      affiliate_unit_name: individualData.affiliate_unit_name.toUpperCase(),
      funds: formatCurrency(exportData.total_money - exportData.loan_money),
      loan_money_text: readCurrency(exportData.loan_money.toString()),
      month_count: exportData.duration * 12,
      period_count: exportData.duration * 12,
      period_lack_count: exportData.duration * 10,
      paid_lack_period: formatCurrency(
        Math.round(exportData.loan_money / (exportData.duration * 10) / 10000) * 10000
      ),
      paid_lack_period_text: readCurrency(
        `${Math.round(exportData.loan_money / (exportData.duration * 10) / 10000) * 10000}`
      ),
      paid_period: formatCurrency(
        Math.round(exportData.loan_money / (exportData.duration * 12) / 10000) * 10000
      ),
      paid_period_text: readCurrency(
        `${Math.round(exportData.loan_money / (exportData.duration * 12) / 10000) * 10000}`
      ),
      total_money: formatCurrency(exportData.total_money),
      loan_money: formatCurrency(exportData.loan_money),
      total_income: formatCurrency(exportData.total_income),
      qualification_text: exportData.is_qualified
        ? 'Đủ điều kiện vay vốn'
        : 'Không đủ điều kiện vay vốn',
      first_pay_day: `${firstPayDay}`.padStart(2, '0'),
      first_pay_month: `${firstPayMonth}`.padStart(2, '0'),
      first_pay_year: `${firstPayYear}`.padStart(2, '0')
    };
  }

  // In giấy thẩm định
  async exportAppraisalReport(
    individualId: string,
    exportData: ExportFormIndividualDto,
    userId: number
  ): Promise<Buffer> {
    const docData = await this.getBaseExportData(individualId, exportData, userId);

    const templateContent = fs.readFileSync(
      'src/template/doc/CN_to_trinh_tham_dinh.docx',
      'binary'
    );
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
  // In phiếu ủy nhiệm chi
  async exportBankReceipt(
    individualId: string,
    exportData: ExportFormIndividualDto,
    userId: number
  ): Promise<Buffer> {
    const docData = await this.getBaseExportData(individualId, exportData, userId);

    const templateContent = fs.readFileSync('src/template/doc/CN_giay_uy_nhiem_chi.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
  // In giấy lĩnh tiền mặt
  async exportCashReceipt(
    individualId: string,
    exportData: ExportFormIndividualDto,
    userId: number
  ): Promise<Buffer> {
    const docData = await this.getBaseExportData(individualId, exportData, userId);

    const templateContent = fs.readFileSync(
      'src/template/doc/CN_giay_linh_tien_mat.docx',
      'binary'
    );
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
  // In hợp đồng 60 - 50
  async exportContract6050(
    individualId: string,
    exportData: ExportFormIndividualDto,
    userId: number
  ): Promise<Buffer> {
    const docData = await this.getBaseExportData(individualId, exportData, userId);

    const templateContent = fs.readFileSync('src/template/doc/CN_hop_dong_60_50.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
  // In hợp đồng 60 - 60
  async exportContract6060(
    individualId: string,
    exportData: ExportFormIndividualDto,
    userId: number
  ): Promise<Buffer> {
    const docData = await this.getBaseExportData(individualId, exportData, userId);

    const templateContent = fs.readFileSync('src/template/doc/CN_hop_dong_60_60.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
  // In giấy nhận nợ
  async exportDebitReceipt(
    individualId: string,
    exportData: ExportFormIndividualDto,
    userId: number
  ): Promise<Buffer> {
    const docData = await this.getBaseExportData(individualId, exportData, userId);

    const templateContent = fs.readFileSync('src/template/doc/CN_giay_nhan_no.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
}
