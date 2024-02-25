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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const class_transformer_1 = require("class-transformer");
const moment_1 = __importDefault(require("moment"));
const date_constant_1 = require("../../constant/date.constant");
const typeorm_1 = require("typeorm");
const branch_entity_1 = require("../branch/branch.entity");
let User = class User {
    logInsert() {
        console.log('Insert new user:', this);
    }
    logUpdate() {
        console.log('Update user:', this);
    }
    logRemove() {
        console.log('Remove user:', this);
    }
    constructor(user_id) {
        this.user_id = user_id;
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "full_name", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "is_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", String)
], User.prototype, "deleted_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", String)
], User.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", String)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch, (branch) => branch.users),
    (0, typeorm_1.JoinColumn)({ name: 'branch_id' }),
    __metadata("design:type", branch_entity_1.Branch)
], User.prototype, "branch", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.branch?.branch_id),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], User.prototype, "branch_id", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.branch?.branch_name),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], User.prototype, "branch_name", void 0);
__decorate([
    (0, typeorm_1.AfterInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "logInsert", null);
__decorate([
    (0, typeorm_1.AfterUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "logUpdate", null);
__decorate([
    (0, typeorm_1.AfterRemove)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "logRemove", null);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Number])
], User);
//# sourceMappingURL=users.entity.js.map