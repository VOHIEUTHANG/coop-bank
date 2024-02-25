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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const page_dto_1 = require("../../common/dto/page.dto");
const branch_entity_1 = require("../branch/branch.entity");
const hash_password_helper_1 = __importDefault(require("../../helper/hash-password.helper"));
let UsersService = class UsersService {
    constructor(repo, dataSource) {
        this.repo = repo;
        this.dataSource = dataSource;
    }
    create(createUserDto) {
        const user = this.repo.create(createUserDto);
        return this.repo.save(user);
    }
    async findOneByUsername(username) {
        const user = await this.repo.findOne({ where: { username }, relations: ['branch'] });
        if (!user) {
            throw new common_1.NotFoundException('Không tìm thấy người dùng !');
        }
        return user;
    }
    async findOneBy(condition) {
        const user = await this.repo.findOne({ where: condition, relations: ['branch'] });
        if (!user) {
            throw new common_1.NotFoundException(`Không tìm thấy người dùng !`);
        }
        return user;
    }
    async find(filter) {
        const queryBuilder = this.repo.createQueryBuilder('user');
        queryBuilder
            .where(new typeorm_1.Brackets((qb) => {
            qb.where('user.username like :search', {
                search: `%${filter.search}%`
            })
                .orWhere('user.full_name like :search', {
                search: `%${filter.search}%`
            })
                .orWhere('user.email like :search', {
                search: `%${filter.search}%`
            });
        }))
            .andWhere(!!filter.created_date_from && 'user.created_at >= :created_date_from', {
            created_date_from: filter.created_date_from
        })
            .andWhere(!!filter.created_date_to && 'user.created_at <= :created_date_to', {
            created_date_to: filter.created_date_to
        })
            .leftJoinAndSelect('user.branch', 'branch')
            .orderBy('user.created_at', filter.order)
            .skip(filter.skip)
            .take(filter.limit);
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
        return new page_dto_1.PageDto(entities, filter, itemCount);
    }
    async update(updateData) {
        const user = await this.findOneBy({ user_id: updateData.user_id });
        delete updateData.password;
        Object.assign(user, updateData);
        if (updateData.branch_id) {
            const branch = new branch_entity_1.Branch(updateData.branch_id);
            user.branch = branch;
        }
        return this.repo.save(user);
    }
    async updatePassword(updateData, userId) {
        const user = await this.findOneBy({ user_id: userId });
        const isMatchPassword = hash_password_helper_1.default.comparePassword(updateData.old_password, user.password);
        if (!isMatchPassword) {
            throw new common_1.BadRequestException('Mật khẩu cũ không chính xác');
        }
        user.password = hash_password_helper_1.default.hashPassword(updateData.new_password);
        return this.repo.save(user);
    }
    async lock(userId) {
        const user = await this.findOneBy({ user_id: userId });
        user.is_active = false;
        return this.repo.save(user);
    }
    async getOptions() {
        return this.repo
            .createQueryBuilder('user')
            .select(['user.user_id AS value', 'user.full_name AS label'])
            .getRawMany();
    }
    async demoTransaction() {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.save({});
            await queryRunner.manager.save({});
            await queryRunner.commitTransaction();
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.DataSource])
], UsersService);
//# sourceMappingURL=users.service.js.map