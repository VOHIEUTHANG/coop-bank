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
exports.BranchService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const branch_entity_1 = require("./branch.entity");
const page_dto_1 = require("../../common/dto/page.dto");
const string_util_1 = require("../../utils/string.util");
const users_entity_1 = require("../users/users.entity");
let BranchService = class BranchService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(branchData, user_id) {
        const existedSameBranch = await this.repo.findOneBy({ branch_name: branchData.branch_name });
        if (existedSameBranch) {
            throw new common_1.BadRequestException(`Đã tồn tại chi nhánh với tên ${branchData.branch_name}`);
        }
        branchData.branch_id = (0, string_util_1.generateId)();
        branchData.created_user = new users_entity_1.User(user_id);
        const branch = this.repo.create(branchData);
        return this.repo.save(branch);
    }
    async getOptions() {
        return this.repo
            .createQueryBuilder('branch')
            .select(['branch.branch_id AS value', 'branch.branch_name AS label'])
            .getRawMany();
    }
    async findOne(branch_id) {
        const branch = await this.repo.findOne({
            where: { branch_id },
            relations: ['bankRepresentatives']
        });
        if (!branch) {
            throw new common_1.NotFoundException('Không tìm thấy chi nhánh !');
        }
        return branch;
    }
    async find(filter) {
        const queryBuilder = this.repo.createQueryBuilder('branch');
        queryBuilder
            .where(new typeorm_1.Brackets((qb) => qb
            .where('branch.branch_name like :search', {
            search: `%${filter.search}%`
        })
            .orWhere('branch.phone_number_main like :search', {
            search: `%${filter.search}%`
        })
            .orWhere('branch.phone_number_sub like :search', {
            search: `%${filter.search}%`
        })))
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
        return new page_dto_1.PageDto(entities, filter, itemCount);
    }
    async update(attrs) {
        const branch = await this.findOne(attrs.branch_id);
        Object.assign(branch, attrs);
        return this.repo.save(branch);
    }
    async delete(branch_id) {
        const branch = await this.findOne(branch_id);
        branch.deleted_at = new Date().toISOString();
        return this.repo.save(branch);
    }
};
exports.BranchService = BranchService;
exports.BranchService = BranchService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(branch_entity_1.Branch)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BranchService);
//# sourceMappingURL=branch.service.js.map