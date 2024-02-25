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
exports.AffiliateUnitService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const affiliate_unit_entity_1 = require("./entity/affiliate-unit.entity");
const page_dto_1 = require("../../common/dto/page.dto");
const string_util_1 = require("../../utils/string.util");
const users_entity_1 = require("../users/users.entity");
const date_util_1 = require("../../utils/date.util");
const file_helper_1 = require("../../helper/file.helper");
const fs_1 = __importDefault(require("fs"));
const docxtemplater_1 = __importDefault(require("docxtemplater"));
const pizzip_1 = __importDefault(require("pizzip"));
const bank_representative_constant_1 = require("../bank-representative/bank-representative.constant");
const representative_constant_1 = require("../representative/representative.constant");
let AffiliateUnitService = class AffiliateUnitService {
    constructor(repo, userRepo, dataSource, fileService) {
        this.repo = repo;
        this.userRepo = userRepo;
        this.dataSource = dataSource;
        this.fileService = fileService;
    }
    async create(createData, user_id) {
        createData.founding_date = (0, date_util_1.transformDate)(createData.founding_date);
        createData.affiliate_unit_id = (0, string_util_1.generateId)();
        createData.created_user = new users_entity_1.User(user_id);
        this.fileService.saveFileField(createData, 'affiliate_unit_image_1');
        this.fileService.saveFileField(createData, 'affiliate_unit_image_2');
        this.fileService.saveFileField(createData, 'affiliate_unit_paycheck');
        const representative = this.repo.create(createData);
        return this.repo.save(representative);
    }
    async findOne(affiliate_unit_id) {
        const representative = await this.repo.findOneBy({ affiliate_unit_id });
        if (!representative) {
            throw new common_1.NotFoundException('Không tìm thấy đơn vị liên kết !');
        }
        return representative;
    }
    async find(filter) {
        const queryBuilder = this.repo.createQueryBuilder('affiliate_unit');
        queryBuilder
            .where(new typeorm_1.Brackets((qb) => qb
            .where('affiliate_unit.affiliate_unit_name like :search', {
            search: `%${filter.search}%`
        })
            .orWhere('affiliate_unit.affiliate_unit_code like :search', {
            search: `%${filter.search}%`
        })))
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
        return new page_dto_1.PageDto(entities, filter, itemCount);
    }
    async update(updateData) {
        const representative = await this.findOne(updateData.affiliate_unit_id);
        updateData.founding_date = (0, date_util_1.transformDate)(updateData.founding_date);
        this.fileService.saveFileField(updateData, 'affiliate_unit_image_1');
        this.fileService.saveFileField(updateData, 'affiliate_unit_image_2');
        this.fileService.saveFileField(updateData, 'affiliate_unit_paycheck');
        Object.assign(representative, updateData);
        return this.repo.save(representative);
    }
    async delete(id) {
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
    async getBranchData(userId) {
        const getBranchQuery = `
      SELECT 
        branch.branch_name,
        branch.address AS branch_address,
        branch.branch_province AS branch_province,
        branch.branch_fax AS branch_fax,
        branch.phone_number_main AS branch_phone_main,
        branch.phone_number_sub AS branch_phone_sub,
        branch.bank_number AS branch_bank_number,
        bank_representative.bank_representative_name,
        bank_representative.bank_representative_position,
        bank_representative.id_number,
        bank_representative.id_issued_by,
        DATE_FORMAT(bank_representative.id_issued_date, '%d/%m/%Y') AS id_issued_date
      FROM user
      LEFT JOIN branch on branch.branch_id = user.branch_id
      LEFT JOIN LATERAL(
        SELECT 
        *
        FROM bank_representative_branch AS BRB
        JOIN bank_representative AS BR ON BR.bank_representative_id = BRB.bankRepresentativeBankRepresentativeId
        AND BR.bank_representative_position = ?
        ANd BR.deleted_at IS NULL
        WHERE BRB.branchBranchId = branch.branch_id
        LIMIT 1
      ) bank_representative on 1 = 1
      WHERE user.user_id = ?
      AND user.deleted_at IS NULL
      `;
        const [branchData] = await this.dataSource.query(getBranchQuery, [
            bank_representative_constant_1.BankRepresentativePosition.DIRECTOR,
            userId
        ]);
        const serializedData = {
            branch_name: branchData.branch_name,
            branch_address: branchData.branch_address,
            branch_fax: branchData.branch_fax,
            branch_bank_number: branchData.branch_bank_number,
            branch_province: branchData.branch_province,
            branch_phone: (0, string_util_1.joinString)([branchData.branch_phone_main, branchData.branch_phone_sub], ' - '),
            bank_representative_name: branchData.bank_representative_name?.toUpperCase(),
            bank_representative_id_number: branchData.id_number,
            bank_representative_id_issued_by: branchData.id_issued_by,
            bank_representative_id_issued_date: branchData.id_issued_date,
            bank_representative_id_position: (0, bank_representative_constant_1.getBankRepresentativePositionName)(branchData.bank_representative_position)
        };
        return serializedData;
    }
    async getAffiliateUnitData(affiliateUnitId) {
        const getAffiliateUnitQuery = `
    SELECT
      au.affiliate_unit_name,
      au.affiliate_unit_address,
      au.affiliate_unit_phone,
      au.affiliate_unit_fax,
      representative.representative_name AS rep_name, 
      representative.representative_position AS rep_position,
      YEAR(representative.birth_date) AS rep_birth_date,
      representative.id_number AS rep_id_number,
      representative.id_issued_by AS rep_id_issued_by,
      DATE_FORMAT(representative.id_issued_date, '%d/%m/%Y') AS rep_id_date,
      representative.address AS rep_address,
      representative.phone_number AS rep_phone,
      representative.bank_number AS rep_bank_number,
      representative.bank_name AS rep_bank_name,
      representative.tax_code AS rep_tax_code
    FROM
      affiliate_unit AS au
      LEFT JOIN LATERAL (
      SELECT
        * 
      FROM
        representative_affiliate_unit AS RAU
        JOIN representative AS R ON R.representative_id = RAU.representativeRepresentativeId 
        AND R.representative_position = ?
      WHERE
        RAU.affiliateUnitAffiliateUnitId = au.affiliate_unit_id 
        LIMIT 1 
      ) representative ON 1 = 1 
    WHERE
      au.affiliate_unit_id = ?
      AND au.deleted_at IS NULL
    `;
        const [affiliateData] = await this.dataSource.query(getAffiliateUnitQuery, [
            representative_constant_1.RepresentativePosition.PRINCIPAL,
            affiliateUnitId
        ]);
        const serializedAffiliateData = {
            unit_name: affiliateData.affiliate_unit_name?.toUpperCase(),
            unit_address: affiliateData.affiliate_unit_address,
            unit_phone: affiliateData.affiliate_unit_phone,
            unit_fax: affiliateData.affiliate_unit_fax,
            rep_name: affiliateData.rep_name?.toUpperCase(),
            rep_position: (0, representative_constant_1.getRepresentativePositionName)(affiliateData.rep_position),
            rep_birth_date: affiliateData.rep_birth_date,
            rep_id_number: affiliateData.rep_id_number,
            rep_id_by: affiliateData.rep_id_issued_by,
            rep_id_date: affiliateData.rep_id_date,
            rep_address: affiliateData.rep_address,
            rep_phone: affiliateData.rep_phone,
            rep_bank_number: affiliateData.rep_bank_number,
            rep_bank_name: affiliateData.rep_bank_name,
            rep_tax_code: affiliateData.rep_tax_code
        };
        return serializedAffiliateData;
    }
    async exportAffilateContract(affiliateUnitId, userId) {
        const branchData = await this.getBranchData(userId);
        const affiliateData = await this.getAffiliateUnitData(affiliateUnitId);
        const docData = {
            ...branchData,
            ...affiliateData,
            branch_name: branchData.branch_name.toUpperCase()
        };
        const templateContent = fs_1.default.readFileSync('src/template/doc/DVLK_hop_dong_lien_ket.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
    async exportServicentract(affiliateUnitId, userId) {
        const branchData = await this.getBranchData(userId);
        const affiliateData = await this.getAffiliateUnitData(affiliateUnitId);
        const docData = {
            ...branchData,
            ...affiliateData,
            branch_name: branchData.branch_name.toUpperCase()
        };
        const templateContent = fs_1.default.readFileSync('src/template/doc/DVLK_hop_dong_dich_vu.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
    async exportAssignPay(affiliateUnitId, userId) {
        const branchData = await this.getBranchData(userId);
        const affiliateData = await this.getAffiliateUnitData(affiliateUnitId);
        const docData = {
            ...branchData,
            ...affiliateData
        };
        const templateContent = fs_1.default.readFileSync('src/template/doc/DVLK_cu_nguoi_tra_tien.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
    async exportPeriodicalCheck(affiliateUnitId, userId) {
        const branchData = await this.getBranchData(userId);
        const affiliateData = await this.getAffiliateUnitData(affiliateUnitId);
        const docData = {
            ...branchData,
            ...affiliateData
        };
        const templateContent = fs_1.default.readFileSync('src/template/doc/DVLK_kiem_tra_dinh_ky.docx', 'binary');
        const zip = new pizzip_1.default(templateContent);
        const doc = new docxtemplater_1.default(zip);
        doc.setData(docData);
        doc.render();
        const buffer = doc.getZip().generate({ type: 'nodebuffer' });
        return buffer;
    }
};
exports.AffiliateUnitService = AffiliateUnitService;
exports.AffiliateUnitService = AffiliateUnitService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(affiliate_unit_entity_1.AffiliateUnit)),
    __param(1, (0, typeorm_2.InjectRepository)(users_entity_1.User)),
    __param(2, (0, typeorm_2.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.DataSource,
        file_helper_1.FileService])
], AffiliateUnitService);
//# sourceMappingURL=affiliate-unit.service.js.map