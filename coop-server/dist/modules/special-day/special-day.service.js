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
exports.SpecialDayService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const representative_entity_1 = require("../representative/representative.entity");
const typeorm_2 = require("typeorm");
const affiliate_unit_entity_1 = require("../affiliate-unit/entity/affiliate-unit.entity");
const individual_entity_1 = require("../individual/entity/individual.entity");
const moment_1 = __importDefault(require("moment"));
const date_constant_1 = require("../../constant/date.constant");
const special_day_constant_1 = require("./special-day.constant");
const representative_constant_1 = require("../representative/representative.constant");
const excel4node_1 = __importDefault(require("excel4node"));
const excel_helper_1 = __importDefault(require("../../helper/excel.helper"));
let SpecialDayService = class SpecialDayService {
    constructor(representativeRepo, affiliateUnitRepo, individualRepo) {
        this.representativeRepo = representativeRepo;
        this.affiliateUnitRepo = affiliateUnitRepo;
        this.individualRepo = individualRepo;
    }
    async getList() {
        const currentDate = new Date();
        const daysInCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        const remainingDays = 5 - (daysInCurrentMonth - currentDate.getDate());
        const birthDayRepresentatives = await this._getListBirthDayRepresentative(currentDate, remainingDays);
        const foundingDateAffiliateUnits = await this._getListFoundingDateAffiliateUnit(currentDate, remainingDays);
        const effectiveDateFromRepresentatives = await this._getListEffectiveDateFromRepresentative(currentDate, remainingDays);
        const effectiveDateEndRepresentatives = await this._getListEffectiveDateEndRepresentative(currentDate, remainingDays);
        return [
            ...birthDayRepresentatives,
            ...foundingDateAffiliateUnits,
            ...effectiveDateFromRepresentatives,
            ...effectiveDateEndRepresentatives
        ]?.sort((a, b) => a.day_count - b.day_count);
    }
    async _getListBirthDayRepresentative(currentDate, remainingDays) {
        const representatives = await this.representativeRepo
            .createQueryBuilder('rep')
            .where('rep.representative_position = :position', {
            position: representative_constant_1.RepresentativePosition.PRINCIPAL
        })
            .andWhere(new typeorm_2.Brackets((qb) => qb
            .where('DAY(rep.birth_date) = :day AND MONTH(rep.birth_date) = :month', {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1
        })
            .orWhere('DAY(rep.birth_date) - :day <= 5 AND DAY(rep.birth_date) > :day AND MONTH(rep.birth_date) = :month', {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1
        })
            .orWhere('MONTH(rep.birth_date) = :nextMonth AND DAY(rep.birth_date) <= :remainingDays', {
            nextMonth: ((currentDate.getMonth() + 1) % 12) + 1,
            remainingDays: remainingDays > 0 ? remainingDays : 0
        })))
            .getMany();
        return representatives.map((item) => ({
            name: item.representative_name,
            id: item.representative_id,
            date: (0, moment_1.default)(item.birth_date).format(date_constant_1.DATE_FORMAT_DDMMYYYY),
            object_type: special_day_constant_1.OBJECT_TYPE.PRINCIPAL,
            date_type: special_day_constant_1.DATE_TYPE.BIRTH_DATE,
            day_count: (0, moment_1.default)(item.birth_date)
                .set('year', (0, moment_1.default)().year())
                .endOf('day')
                .diff((0, moment_1.default)(), 'days')
        }));
    }
    async _getListFoundingDateAffiliateUnit(currentDate, remainingDays) {
        const affiliateUnits = await this.affiliateUnitRepo
            .createQueryBuilder('affiliate_unit')
            .andWhere(new typeorm_2.Brackets((qb) => qb
            .where('DAY(affiliate_unit.founding_date) = :day AND MONTH(affiliate_unit.founding_date) = :month', {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1
        })
            .orWhere('DAY(affiliate_unit.founding_date) - :day <= 5 AND DAY(affiliate_unit.founding_date) > :day AND MONTH(affiliate_unit.founding_date) = :month', {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1
        })
            .orWhere('MONTH(affiliate_unit.founding_date) = :nextMonth AND DAY(affiliate_unit.founding_date) <= :remainingDays', {
            nextMonth: ((currentDate.getMonth() + 1) % 12) + 1,
            remainingDays: remainingDays > 0 ? remainingDays : 0
        })))
            .getMany();
        return affiliateUnits.map((item) => ({
            name: item.affiliate_unit_name,
            id: item.affiliate_unit_id,
            date: (0, moment_1.default)(item.founding_date).format(date_constant_1.DATE_FORMAT_DDMMYYYY),
            object_type: special_day_constant_1.OBJECT_TYPE.AFFILIATE_UNIT,
            date_type: special_day_constant_1.DATE_TYPE.FOUNDING_DATE,
            day_count: (0, moment_1.default)(item.founding_date)
                .set('year', (0, moment_1.default)().year())
                .endOf('day')
                .diff((0, moment_1.default)(), 'days')
        }));
    }
    async _getListEffectiveDateFromRepresentative(currentDate, remainingDays) {
        const representatives = await this.representativeRepo
            .createQueryBuilder('rep')
            .where('rep.representative_position = :position', {
            position: representative_constant_1.RepresentativePosition.PRINCIPAL
        })
            .andWhere(new typeorm_2.Brackets((qb) => qb
            .where('DAY(rep.effective_date_from) = :day AND MONTH(rep.effective_date_from) = :month', {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1
        })
            .orWhere('DAY(rep.effective_date_from) - :day <= 5 AND DAY(rep.effective_date_from) > :day AND MONTH(rep.effective_date_from) = :month', {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1
        })
            .orWhere('MONTH(rep.effective_date_from) = :nextMonth AND DAY(rep.effective_date_from) <= :remainingDays', {
            nextMonth: ((currentDate.getMonth() + 1) % 12) + 1,
            remainingDays: remainingDays > 0 ? remainingDays : 0
        })))
            .getMany();
        return representatives.map((item) => ({
            name: item.representative_name,
            id: item.representative_id,
            date: (0, moment_1.default)(item.effective_date_from).format(date_constant_1.DATE_FORMAT_DDMMYYYY),
            object_type: special_day_constant_1.OBJECT_TYPE.PRINCIPAL,
            date_type: special_day_constant_1.DATE_TYPE.EFFECTIVE_DATE_FROM,
            day_count: (0, moment_1.default)(item.effective_date_from)
                .set('year', (0, moment_1.default)().year())
                .endOf('day')
                .diff((0, moment_1.default)(), 'days')
        }));
    }
    async _getListEffectiveDateEndRepresentative(currentDate, remainingDays) {
        const representatives = await this.representativeRepo
            .createQueryBuilder('rep')
            .where('rep.representative_position = :position', {
            position: representative_constant_1.RepresentativePosition.PRINCIPAL
        })
            .andWhere(new typeorm_2.Brackets((qb) => qb
            .where('DAY(rep.effective_date_to) = :day AND MONTH(rep.effective_date_to) = :month', {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1
        })
            .orWhere('DAY(rep.effective_date_to) - :day <= 5 AND DAY(rep.effective_date_to) > :day AND MONTH(rep.effective_date_to) = :month', {
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1
        })
            .orWhere('MONTH(rep.effective_date_to) = :nextMonth AND DAY(rep.effective_date_to) <= :remainingDays', {
            nextMonth: ((currentDate.getMonth() + 1) % 12) + 1,
            remainingDays: remainingDays > 0 ? remainingDays : 0
        })))
            .getMany();
        return representatives.map((item) => ({
            name: item.representative_name,
            id: item.representative_id,
            date: (0, moment_1.default)(item.effective_date_to).format(date_constant_1.DATE_FORMAT_DDMMYYYY),
            object_type: special_day_constant_1.OBJECT_TYPE.PRINCIPAL,
            date_type: special_day_constant_1.DATE_TYPE.EFFECTIVE_DATE_TO,
            day_count: (0, moment_1.default)(item.effective_date_to)
                .set('year', (0, moment_1.default)().year())
                .endOf('day')
                .diff((0, moment_1.default)(), 'days')
        }));
    }
    async getListNotify() {
        const specialDays = await this.getList();
        const notifys = specialDays.map((item) => ({
            subject: `${item.day_count > 0 ? `Còn ${item.day_count} là đến` : 'Hôm nay là'} ${this._getDateName(item.date_type)?.toLocaleLowerCase()} của ${this._getObjectName(item.object_type)?.toLocaleLowerCase()} - ${item.name}`
        }));
        return notifys;
    }
    async getNotifyCount() {
        const specialDays = await this.getList();
        return specialDays.length || 0;
    }
    async exportExcel() {
        const data = await this.getList();
        const workbook = new excel4node_1.default.Workbook();
        const BUDGET_SHEETS_NAME = 'Bảng theo dõi ngày đặc biệt';
        const WorkSheet = workbook.addWorksheet(BUDGET_SHEETS_NAME);
        const columns = [
            {
                key: 'name',
                title: 'Tên đối tượng',
                width: 40
            },
            {
                key: 'object_type',
                title: 'Loại đối tượng',
                transform: (value) => this._getObjectName(value),
                width: 40
            },
            {
                key: 'date_type',
                title: 'Loại ngày đặc biệt',
                transform: (value) => this._getDateName(value),
                width: 40
            },
            {
                key: 'date',
                title: 'Ngày đặc biệt',
                width: 40
            },
            {
                key: 'day_count',
                title: 'Ngày còn lại',
                transform: (value) => `${value} ngày`,
                width: 40
            }
        ];
        const NUMBERED = true;
        excel_helper_1.default.createTableData(WorkSheet, columns, data, NUMBERED);
        return workbook;
    }
    _getDateName(dateType) {
        return dateType === special_day_constant_1.DATE_TYPE.BIRTH_DATE
            ? 'Ngày sinh nhật'
            : dateType === special_day_constant_1.DATE_TYPE.FOUNDING_DATE
                ? 'Ngày thành lập'
                : dateType === special_day_constant_1.DATE_TYPE.EFFECTIVE_DATE_FROM
                    ? 'Ngày bắt đầu nhiệm kỳ'
                    : dateType === special_day_constant_1.DATE_TYPE.EFFECTIVE_DATE_TO
                        ? 'Ngày kết thúc nhiệm kỳ'
                        : 'Không xác định';
    }
    _getObjectName(objectType) {
        return objectType === special_day_constant_1.OBJECT_TYPE.PRINCIPAL
            ? 'Hiệu trưởng'
            : objectType === special_day_constant_1.OBJECT_TYPE.INDIVIDUAL
                ? 'Cá nhân'
                : 'Đơn vị liên kết';
    }
};
exports.SpecialDayService = SpecialDayService;
exports.SpecialDayService = SpecialDayService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(representative_entity_1.Representative)),
    __param(1, (0, typeorm_1.InjectRepository)(affiliate_unit_entity_1.AffiliateUnit)),
    __param(2, (0, typeorm_1.InjectRepository)(individual_entity_1.Individual)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], SpecialDayService);
//# sourceMappingURL=special-day.service.js.map