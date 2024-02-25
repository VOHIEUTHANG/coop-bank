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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankRepresentativeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bank_representative_entity_1 = require("./bank-representative.entity");
const page_dto_1 = require("../../common/dto/page.dto");
const string_util_1 = require("../../utils/string.util");
const users_entity_1 = require("../users/users.entity");
const date_util_1 = require("../../utils/date.util");
let BankRepresentativeService = class BankRepresentativeService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createData, user_id) {
        const existedSameIdNumber = await this.repo.findOneBy({
            id_number: createData.id_number
        });
        if (existedSameIdNumber) {
            throw new common_1.BadRequestException(`Đã tồn tại người đại diện với căn cước công dân số ${createData.id_number}`);
        }
        createData.bank_representative_id = (0, string_util_1.generateId)();
        createData.created_user = new users_entity_1.User(user_id);
        createData.birth_date = (0, date_util_1.transformDate)(createData.birth_date);
        createData.id_issued_date = (0, date_util_1.transformDate)(createData.id_issued_date);
        const bankRepresentative = this.repo.create(createData);
        return this.repo.save(bankRepresentative);
    }
    async findOne(bank_representative_id) {
        const representative = await this.repo.findOneBy({ bank_representative_id });
        if (!representative) {
            throw new common_1.NotFoundException('Không tìm thấy người đại diện !');
        }
        return representative;
    }
    async find(filter) {
        const queryBuilder = this.repo.createQueryBuilder('bank_representative');
        queryBuilder
            .where(new typeorm_1.Brackets((qb) => qb
            .where('bank_representative.bank_representative_name like :search', {
            search: `%${filter.search}%`
        })
            .orWhere('bank_representative.id_number like :search', {
            search: `%${filter.search}%`
        })
            .orWhere('bank_representative.phone_number like :search', {
            search: `%${filter.search}%`
        })))
            .andWhere(!!filter.created_date_from && 'bank_representative.created_at >= :created_date_from', {
            created_date_from: filter.created_date_from
        })
            .andWhere(!!filter.created_date_to && 'bank_representative.created_at <= :created_date_to', {
            created_date_to: filter.created_date_to
        })
            .leftJoinAndSelect('bank_representative.created_user', 'user')
            .orderBy('bank_representative.created_at', filter.order)
            .skip(filter.skip)
            .take(filter.limit);
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
        return new page_dto_1.PageDto(entities, filter, itemCount);
    }
    async update(updateData) {
        const bankRepresentative = await this.findOne(updateData.bank_representative_id);
        updateData.birth_date = (0, date_util_1.transformDate)(updateData.birth_date);
        updateData.id_issued_date = (0, date_util_1.transformDate)(updateData.id_issued_date);
        Object.assign(bankRepresentative, updateData);
        return this.repo.save(bankRepresentative);
    }
    async delete(bank_representative_id) {
        const branch = await this.findOne(bank_representative_id);
        branch.deleted_at = new Date().toISOString();
        return this.repo.save(branch);
    }
};
exports.BankRepresentativeService = BankRepresentativeService;
exports.BankRepresentativeService = BankRepresentativeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(bank_representative_entity_1.BankRepresentative)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BankRepresentativeService);
//# sourceMappingURL=bank-representative.service.js.map