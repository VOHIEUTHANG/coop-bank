"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndividualService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const individual_entity_1 = require("./entity/individual.entity");
const page_dto_1 = require("../../common/dto/page.dto");
const string_util_1 = require("../../utils/string.util");
const users_entity_1 = require("../users/users.entity");
const date_util_1 = require("../../utils/date.util");
const file_helper_1 = require("../../helper/file.helper");
const fs_1 = __importDefault(require("fs"));
const docxtemplater_1 = __importDefault(require("docxtemplater"));
const pizzip_1 = __importDefault(require("pizzip"));
const affiliate_unit_service_1 = require("../affiliate-unit/affiliate-unit.service");
const moment_1 = __importDefault(require("moment"));
const affiliate_unit_entity_1 = require("../affiliate-unit/entity/affiliate-unit.entity");
let IndividualService = class IndividualService {
    constructor(repo, fileService, affiliateUnitService, dataSource) {
        this.repo = repo;
        this.fileService = fileService;
        this.affiliateUnitService = affiliateUnitService;
        this.dataSource = dataSource;
    }
    async createOrUpdate(data, user_id) {
        let newData = { ...data };
        if (data.individual_id) {
            newData = await this.findOne(data.individual_id);
        }
        else {
            const existedSameIdNumber = await this.repo.findOneBy({ id_number: data.id_number });
            if (existedSameIdNumber) {
                throw new common_1.BadRequestException(`Đã tồn tại cá nhân vay vốn với số CCCD ${data.id_number}`);
            }
            newData.individual_id = (0, string_util_1.generateId)();
            newData.created_user = new users_entity_1.User(user_id);
        }
        if (data.affiliate_unit_id) {
            data.affiliate_unit = new affiliate_unit_entity_1.AffiliateUnit(data.affiliate_unit_id);
            delete data.affiliate_unit_id;
        }
        data.birth_date = (0, date_util_1.transformDate)(data.birth_date);
        data.id_issued_date = (0, date_util_1.transformDate)(data.id_issued_date);
        this.fileService.saveFileField(data, 'id_front_image');
        this.fileService.saveFileField(data, 'id_back_image');
        this.fileService.saveFileField(data, 'salary_file');
        this.fileService.saveFileField(data, 'marriage_file');
        this.fileService.saveFileField(data, 'appoint_file');
        Object.assign(newData, data);
        const individual = this.repo.create(newData);
        return this.repo.save(individual);
    }
    async findOne(individual_id, user) {
        const object = await this.repo.findOneBy({ individual_id });
        if (!object) {
            throw new common_1.NotFoundException('Không tìm thấy cá nhân vây vốn !');
        }
        if (user?.interest_rate) {
            object.interest_rate = user?.interest_rate;
        }
        return object;
    }
    async find(filter) {
        const queryBuilder = this.repo.createQueryBuilder('individual');
        queryBuilder
            .where(new typeorm_1.Brackets((qb) => qb
            .where('individual.individual_fullname like :search', {
            search: `%${filter.search}%`
        })
            .orWhere('individual.phone_number like :search', {
            search: `%${filter.search}%`
        })
            .orWhere('individual.id_number like :search', {
            search: `%${filter.search}%`
        })))
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
        return new page_dto_1.PageDto(entities, filter, itemCount);
    }
    async delete(id) {
        const object = await this.findOne(id);
        object.deleted_at = new Date().toISOString();
        return this.repo.save(object);
    }
    async getIndividualData(individualId) {
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
    async saveExportData(individualId, exportData) {
        const individual = await this.findOne(individualId);
        individual.export_data = JSON.stringify(exportData);
        await this.repo.save(individual);
    }
    async getBaseExportData(individualId, exportData, userId) {
        const branchData = await this.affiliateUnitService.getBranchData(userId);
        const individualData = await this.getIndividualData(individualId);
        const day = (0, moment_1.default)().date();
        const month = (0, moment_1.default)().month() + 1;
        const year = (0, moment_1.default)().year();
        let firstPayDay = individualData.paid_date;
        let firstPayMonth = month;
        let firstPayYear = year;
        if (day >= individualData.paid_date) {
            const firstPayDate = (0, moment_1.default)().add(1, 'month');
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
            funds: (0, string_util_1.formatCurrency)(exportData.total_money - exportData.loan_money),
            loan_money_text: (0, string_util_1.readCurrency)(exportData.loan_money.toString()),
            month_count: exportData.duration * 12,
            period_count: exportData.duration * 12,
            period_lack_count: exportData.duration * 10,
            paid_lack_period: (0, string_util_1.formatCurrency)(Math.round(exportData.loan_money / (exportData.duration * 10) / 10000) * 10000),
            paid_lack_period_text: (0, string_util_1.readCurrency)(`${Math.round(exportData.loan_money / (exportData.duration * 10) / 10000) * 10000}`),
            paid_period: (0, string_util_1.formatCurrency)(Math.round(exportData.loan_money / (exportData.duration * 12) / 10000) * 10000),
            paid_period_text: (0, string_util_1.readCurrency)(`${Math.round(exportData.loan_money / (exportData.duration * 12) / 10000) * 10000}`),
            total_money: (0, string_util_1.formatCurrency)(exportData.total_money),
            loan_money: (0, string_util_1.formatCurrency)(exportData.loan_money),
            total_income: (0, string_util_1.formatCurrency)(exportData.total_income),
            qualification_text: exportData.is_qualified
                ? 'Đủ điều kiện vay vốn'
                : 'Không đủ điều kiện vay vốn',
            first_pay_day: `${firstPayDay}`.padStart(2, '0'),
            first_pay_month: `${firstPayMonth}`.padStart(2, '0'),
            first_pay_year: `${firstPayYear}`.padStart(2, '0')
        };
    }
    async exportAppraisalReport(individualId, exportData, userId) {
        const docData = await this.getBaseExportData(individualId, exportData, userId);
        const templateContent = fs_1.default.readFileSync('src/template/doc/CN_to_trinh_tham_dinh.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
    async exportBankReceipt(individualId, exportData, userId) {
        const docData = await this.getBaseExportData(individualId, exportData, userId);
        const templateContent = fs_1.default.readFileSync('src/template/doc/CN_giay_uy_nhiem_chi.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
    async exportCashReceipt(individualId, exportData, userId) {
        const docData = await this.getBaseExportData(individualId, exportData, userId);
        const templateContent = fs_1.default.readFileSync('src/template/doc/CN_giay_linh_tien_mat.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
    async exportContract6050(individualId, exportData, userId) {
        const docData = await this.getBaseExportData(individualId, exportData, userId);
        const templateContent = fs_1.default.readFileSync('src/template/doc/CN_hop_dong_60_50.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
    async exportContract6060(individualId, exportData, userId) {
        const docData = await this.getBaseExportData(individualId, exportData, userId);
        const templateContent = fs_1.default.readFileSync('src/template/doc/CN_hop_dong_60_60.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
    async exportDebitReceipt(individualId, exportData, userId) {
        const docData = await this.getBaseExportData(individualId, exportData, userId);
        const templateContent = fs_1.default.readFileSync('src/template/doc/CN_giay_nhan_no.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
};
exports.IndividualService = IndividualService;
exports.IndividualService = IndividualService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(individual_entity_1.Individual)),
    __param(3, (0, typeorm_2.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        file_helper_1.FileService,
        affiliate_unit_service_1.AffiliateUnitService,
        typeorm_1.DataSource])
], IndividualService);
//# sourceMappingURL=individual.service.js.map