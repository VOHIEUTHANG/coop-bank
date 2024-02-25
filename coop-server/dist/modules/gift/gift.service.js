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
var GiftService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const page_dto_1 = require("../../common/dto/page.dto");
const string_util_1 = require("../../utils/string.util");
const users_entity_1 = require("../users/users.entity");
const file_helper_1 = require("../../helper/file.helper");
const gift_entity_1 = require("./entity/gift.entity");
const affiliate_unit_entity_1 = require("../affiliate-unit/entity/affiliate-unit.entity");
const date_util_1 = require("../../utils/date.util");
const excel4node_1 = __importDefault(require("excel4node"));
const excel_helper_1 = __importDefault(require("../../helper/excel.helper"));
const moment_1 = __importDefault(require("moment"));
const date_constant_1 = require("../../constant/date.constant");
let GiftService = GiftService_1 = class GiftService {
    constructor(repo, fileService) {
        this.repo = repo;
        this.fileService = fileService;
        this.logger = new common_1.Logger(GiftService_1.name);
    }
    async createOrUpdate(data, user_id) {
        let newData = { ...data };
        if (data.gift_id) {
            newData = await this.findOne(data.gift_id);
        }
        else {
            newData.gift_id = (0, string_util_1.generateId)();
            newData.created_user = new users_entity_1.User(user_id);
        }
        if (data.affiliate_unit_id) {
            data.affiliate_unit = new affiliate_unit_entity_1.AffiliateUnit(data.affiliate_unit_id);
            delete data.affiliate_unit_id;
        }
        if (data.giver_user_id) {
            data.giver_user = new users_entity_1.User(data.giver_user_id);
            delete data.giver_user_id;
        }
        data.gift_date = (0, date_util_1.transformDate)(data.gift_date);
        this.fileService.saveFileField(data, 'gift_image_1');
        this.fileService.saveFileField(data, 'gift_image_2');
        this.fileService.saveFileField(data, 'gift_image_3');
        Object.assign(newData, data);
        const gift = this.repo.create(newData);
        return this.repo.save(gift);
    }
    async findOne(gift_id) {
        const object = await this.repo.findOneBy({ gift_id });
        if (!object) {
            throw new common_1.NotFoundException('Không tìm thấy quà tặng !');
        }
        return object;
    }
    async find(filter) {
        const queryBuilder = this.repo.createQueryBuilder('gift');
        queryBuilder
            .where(new typeorm_1.Brackets((qb) => qb
            .where('gift.gift_content like :search', {
            search: `%${filter.search}%`
        })
            .orWhere('gift.gift_description like :search', {
            search: `%${filter.search}%`
        })))
            .andWhere(!!filter.created_date_from && 'gift.created_at >= :created_date_from', {
            created_date_from: filter.created_date_from
        })
            .andWhere(!!filter.created_date_to && 'gift.created_at <= :created_date_to', {
            created_date_to: filter.created_date_to
        })
            .leftJoinAndSelect('gift.created_user', 'created_user')
            .leftJoinAndSelect('gift.giver_user', 'giver_user')
            .leftJoinAndSelect('gift.affiliate_unit', 'affiliate_unit')
            .orderBy('gift.created_at', filter.order)
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
    async exportExcel() {
        const data = await this.repo.find();
        const workbook = new excel4node_1.default.Workbook();
        const BUDGET_SHEETS_NAME = 'Bảng theo dõi quà tặng';
        const WorkSheet = workbook.addWorksheet(BUDGET_SHEETS_NAME);
        const columns = [
            {
                key: 'gift_content',
                title: 'Nội dung quà tặng',
                width: 70
            },
            {
                key: 'gift_description',
                title: 'Mô tả quà tặng',
                width: 70
            },
            {
                title: 'Đơn vị nhận',
                transform: (value, gift) => gift.affiliate_unit.affiliate_unit_name
            },
            {
                title: 'Người tặng',
                transform: (value, gift) => gift.giver_user.full_name
            },
            {
                key: 'gift_date',
                title: 'Ngày tặng',
                transform: (value) => (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)
            }
        ];
        const NUMBERED = true;
        excel_helper_1.default.createTableData(WorkSheet, columns, data, NUMBERED);
        return workbook;
    }
};
exports.GiftService = GiftService;
exports.GiftService = GiftService = GiftService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(gift_entity_1.Gift)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        file_helper_1.FileService])
], GiftService);
//# sourceMappingURL=gift.service.js.map