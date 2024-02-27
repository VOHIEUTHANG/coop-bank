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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const hash_password_helper_1 = __importDefault(require("../../helper/hash-password.helper"));
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const users_entity_1 = require("../users/users.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const branch_entity_1 = require("../branch/branch.entity");
const transaction_room_entity_1 = require("../transaction-room/transaction-room.entity");
let AuthService = class AuthService {
    constructor(userService, jwtService, repo) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.repo = repo;
    }
    async signup(userData) {
        const existedUser = await this.repo.findOneBy({ username: userData.username });
        if (existedUser) {
            throw new common_1.BadRequestException('Tên đăng nhập đã được sử dụng');
        }
        const existedSameEmail = await this.repo.findOneBy({ email: userData.email });
        if (existedSameEmail) {
            throw new common_1.BadRequestException('Email đã được sử dụng');
        }
        const hashPassword = hash_password_helper_1.default.hashPassword(userData.password);
        userData.password = hashPassword;
        if (userData.branch_id) {
            const branch = new branch_entity_1.Branch(userData.branch_id);
            userData.branch = branch;
        }
        if (userData.transaction_room_id) {
            userData.transaction_room = new transaction_room_entity_1.TransactionRoom(userData.transaction_room_id);
        }
        const user = await this.userService.create(userData);
        return user;
    }
    async validateUser(username, password) {
        const user = await this.userService.findOneByUsername(username);
        if (user && !user.is_active) {
            throw new common_1.NotAcceptableException('Người dùng đã bị khóa');
        }
        const isMatchPassword = hash_password_helper_1.default.comparePassword(password, user.password);
        if (!isMatchPassword) {
            throw new common_1.UnauthorizedException('Nhập sai mật khẩu !');
        }
        return user;
    }
    async getDetailUser(username) {
        return this.userService.findOneByUsername(username);
    }
    async getToken(user) {
        const payload = {
            sub: user.user_id,
            username: user.username,
            is_admin: user.is_admin,
            interest_rate: user?.branch?.interest_rate
        };
        return {
            access_token: this.jwtService.sign(payload, {
                expiresIn: 60 * 60 * 6
            }),
            refresh_token: this.jwtService.sign(payload, {
                expiresIn: 60 * 60 * 24 * 3
            })
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_2.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        typeorm_1.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map