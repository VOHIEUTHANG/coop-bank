import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, DataSource, Repository } from 'typeorm';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { Contract } from './entity/contract.entity';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterContractDto } from './dto/filter-contract.dto';
import { formatCurrency, generateId, readCurrency } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { transformDate } from 'src/utils/date.util';
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import { AffiliateUnitService } from '../affiliate-unit/affiliate-unit.service';
import moment from 'moment';
import { Individual } from '../individual/entity/individual.entity';
import { Gender } from 'src/types/data-type';
import { DATE_FORMAT_DDMMYYYY } from 'src/constant/date.constant';
import { BankRepresentativeService } from '../bank-representative/bank-representative.service';
import { getBankRepresentativePositionName } from '../bank-representative/bank-representative.constant';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(Contract) private repo: Repository<Contract>,
    private affiliateUnitService: AffiliateUnitService,
    private bankRepresentativeService: BankRepresentativeService,
    @InjectDataSource() private dataSource: DataSource
  ) {}

  async createOrUpdate(data: Partial<Contract>, userId?: number) {
    const originData = { ...data };
    const individualId = data.individual_id;
    delete originData.individual_id;
    delete originData.contract_id;

    let newData = { ...data };

    if (data.contract_id) {
      newData = await this.findOne(data.contract_id);
    } else {
      // validate duplicate contract number
      const existedSameContract = await this.repo.findOneBy({
        contract_number: data.contract_number
      });
      if (existedSameContract) {
        throw new BadRequestException(`Đã tồn tại hợp đồng số ${data.contract_number}`);
      }
      newData.contract_id = generateId();
      newData.created_user = new User(userId);
    }

    if (data.individual_id) {
      data.individual = new Individual(data.individual_id);
      delete data.individual_id;
    }

    data.start_date = transformDate(data.start_date);
    data.end_date = transformDate(data.end_date);
    data.contract_date = transformDate(data.contract_date);
    data.first_pay_date = transformDate(data.first_pay_date);

    Object.assign(newData, data);

    // update cache data for individual
    if (individualId) {
      const query = `
      UPDATE individual
      SET export_data = ?
      WHERE individual_id = ?
      `;
      await this.dataSource.query(query, [JSON.stringify(originData), individualId]);
    }

    const individual = this.repo.create(newData);
    return this.repo.save(individual);
  }

  async findOne(contract_id: string): Promise<Contract> {
    const object = await this.repo.findOneBy({ contract_id: contract_id });
    if (!object) {
      throw new NotFoundException('Không tìm thấy hợp đồng !');
    }
    return object;
  }

  async find(filter: FilterContractDto, currentUser: User) {
    const queryBuilder = this.repo.createQueryBuilder('contract');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb.where('contract.contract_number like :search', {
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
      .andWhere(!!filter.created_date_from && 'contract.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'contract.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('contract.created_user', 'user')
      .leftJoinAndSelect('contract.individual', 'individual')
      .orderBy('contract.created_at', filter.order)
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
      IV.individual_code,
      IV.individual_position,
      IV.heir_full_name,
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

  async getBaseExportData(contractId: string, userId: number) {
    const branchData = await this.affiliateUnitService.getBranchData(userId);
    const contractData = await this.findOne(contractId);
    const individualData = await this.getIndividualData(contractData.individual.individual_id);

    const pattern = /NHHT[^;]+(\d+trđ)/;
    const match = contractData.individual_cic.match(pattern);
    let balance = '0trd';
    // get balance at NHHT
    if (match) {
      balance = match[0].split(' ')?.pop();
    } else {
      console.log('No match found.');
    }

    const contractDay = moment(contractData.contract_date).date();
    const contractMonth = moment(contractData.contract_date).month() + 1;
    const contractYear = moment(contractData.contract_date).year();

    const day = moment().date();
    const month = moment().month() + 1;
    const year = moment().year();

    const firstPayDate = moment(contractData.first_pay_date);
    const firstPayDay: number = firstPayDate.date();
    const firstPayMonth: number = firstPayDate.month() + 1;
    const firstPayYear: number = firstPayDate.year();

    return {
      ...branchData,
      ...individualData,
      ctd: `${contractDay}`.padStart(2, '0'),
      ctm: `${contractMonth}`.padStart(2, '0'),
      cty: contractYear,
      heir_full_name_uc: individualData?.heir_full_name?.toUpperCase() || '',
      individual_cic: contractData.individual_cic,
      individual_cic_rank: contractData.individual_cic_rank,
      individual_cic_score: contractData.individual_cic_score,
      interest_rate: contractData.interest_rate,
      declared_total_income: formatCurrency(contractData.declared_total_income),
      estimated_total_income: formatCurrency(contractData.estimated_total_income),
      start_date: moment(contractData.start_date).format(DATE_FORMAT_DDMMYYYY),
      end_date: moment(contractData.end_date).format(DATE_FORMAT_DDMMYYYY),
      first_pay_date: moment(contractData.first_pay_date).format(DATE_FORMAT_DDMMYYYY),
      loan_purpose: contractData.loan_purpose,
      branch_name_uc: branchData.branch_name?.toUpperCase(),
      branch_province_uc: branchData.branch_province?.toUpperCase(),
      dd: `${day}`.padStart(2, '0'),
      mm: `${month}`.padStart(2, '0'),
      year,
      paid_date: `${contractData.paid_date}`.padStart(2, '0'),
      year_end: moment(contractData.end_date).year(),
      secure_money: formatCurrency(
        contractData.declared_total_income * contractData.month_count * 0.7
      ),
      individual_fullname: individualData.individual_fullname?.toUpperCase(),
      individual_fullname_lc: individualData.individual_fullname,
      affiliate_unit_name: individualData.affiliate_unit_name,
      affiliate_unit_name_uc: individualData.affiliate_unit_name?.toUpperCase(),
      funds: formatCurrency(contractData.funds_money),
      loan_money_text: readCurrency(contractData.loan_money.toString()),
      month_count: contractData.month_count,
      period_count: contractData.period_count,
      paid_period: formatCurrency(contractData.first_period_money),
      last_paid_period: formatCurrency(contractData.last_period_money),
      // paid_period: formatCurrency(
      //   Math.round(contractData.loan_money / contractData.period_count / 10000) * 10000
      // ),
      // last_paid_period: formatCurrency(
      //   contractData.loan_money -
      //     Math.round(contractData.loan_money / contractData.period_count / 10000) *
      //       10000 *
      //       (contractData.period_count - 1)
      // ),
      paid_period_text: readCurrency(`${contractData.last_period_money}`),
      total_money: formatCurrency(contractData.total_money),
      loan_money: formatCurrency(contractData.loan_money),
      qualification_text: contractData.is_qualified
        ? 'Đủ điều kiện vay vốn'
        : 'Không đủ điều kiện vay vốn',
      first_pay_day: `${firstPayDay}`.padStart(2, '0'),
      first_pay_month: `${firstPayMonth}`.padStart(2, '0'),
      first_pay_year: `${firstPayYear}`.padStart(2, '0'),
      contract_number: contractData.contract_number,
      individual_bank_number: contractData.individual_bank_number,
      loan_bank_number: contractData.loan_bank_number,
      gender_name: individualData.gender === Gender.Male ? 'Ông' : 'Bà',
      branch_gender_name: branchData.bank_representative_gender === Gender.Male ? 'Ông' : 'Bà',
      director_sign: branchData.transaction_room_id ? '' : 'GIÁM ĐỐC',
      transaction_location_title: branchData.transaction_room_id
        ? `TP. ${branchData.transaction_room_name}`?.toUpperCase()
        : 'TP. KHÁCH HÀNG DN VÀ CÁ NHÂN ĐỀ NGHỊ',
      balance,
      contract_extra_data:
        contractData.month_count === contractData.period_count
          ? ''
          : 'Bên B không phải trả nợ gốc vào tháng 01 và 02 hàng năm, '
    };
  }

  // In giấy thẩm định
  async exportAppraisalReport(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

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
  async exportBankReceipt(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

    const templateContent = fs.readFileSync('src/template/doc/CN_giay_uy_nhiem_chi.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
  // // In giấy lĩnh tiền mặt
  async exportCashReceipt(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

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
  // // In giấy nhận nợ
  async exportDebitReceipt(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

    const templateContent = fs.readFileSync('src/template/doc/CN_giay_nhan_no.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }

  // In giấy mở tài khoản
  async exportAccountOpening(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

    const templateContent = fs.readFileSync('src/template/doc/CN_giay_mo_tk.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }

  // In hợp đồng kiêm đăng ký ngân hàng số
  async exportDigitalContract(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

    const templateContent = fs.readFileSync(
      'src/template/doc/CN_hop_dong_kiem_dang_ky_NH_so.docx',
      'binary'
    );
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }

  // In giấy ủy quyền
  async exportAuthorizationForm(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

    const templateContent = fs.readFileSync('src/template/doc/CN_giay_uy_quyen.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }

  // In giấy đăng ký dịch vụ
  async exportServiceRegistration(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

    const templateContent = fs.readFileSync(
      'src/template/doc/CN_giay_dang_ky_dich_vu.docx',
      'binary'
    );
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }

  // In giấy kiểm tra sử dụng vốn
  async exportCapitalInspection(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

    const templateContent = fs.readFileSync(
      'src/template/doc/CN_kiem_tra_su_dung_von.docx',
      'binary'
    );
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }

  // phiếu khảo sát khách hàng
  async exportCustomerServey(contractId: string, userId: number): Promise<Buffer> {
    const docData = await this.getBaseExportData(contractId, userId);

    const templateContent = fs.readFileSync(
      'src/template/doc/CN_khao_sat_khach_hang.docx',
      'binary'
    );
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }

  // hợp đồng cho vay
  async exportContract(
    contractId: string,
    userId: number,
    bankRepresentativeId: string
  ): Promise<Buffer> {
    const bankRepresentative: any = {};

    if (bankRepresentativeId) {
      const bankRepresentativeData =
        await this.bankRepresentativeService.findOne(bankRepresentativeId);

      bankRepresentative.room_representative_name =
        bankRepresentativeData.bank_representative_name?.toUpperCase();
      bankRepresentative.room_representative_gender = bankRepresentativeData.gender;
      bankRepresentative.room_representative_position =
        bankRepresentativeData.bank_representative_position;
      bankRepresentative.authoritative_number = bankRepresentativeData.authoritative_number;
      bankRepresentative.authoritative_date = bankRepresentativeData.authoritative_date;
      bankRepresentative.transaction_room_address =
        bankRepresentativeData.transaction_rooms?.[0]?.address;
    }
    let docData = await this.getBaseExportData(contractId, userId);

    let templateContent = fs.readFileSync('src/template/doc/CN_hop_dong_cho_vay.docx', 'binary');

    if (bankRepresentative && Object.keys(bankRepresentative)?.length > 0) {
      docData = {
        ...docData,
        ...bankRepresentative,
        room_representative_position: getBankRepresentativePositionName(
          bankRepresentative.room_representative_position
        ),
        authoritative_date: moment(bankRepresentative.authoritative_date).format(
          DATE_FORMAT_DDMMYYYY
        ),
        room_representative_gender: bankRepresentative.gender === Gender.Male ? 'Ông' : 'Bà'
      };

      templateContent = fs.readFileSync(
        'src/template/doc/CN_hop_dong_cho_vay_phong_giao_dich.docx',
        'binary'
      );
    }

    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
}
