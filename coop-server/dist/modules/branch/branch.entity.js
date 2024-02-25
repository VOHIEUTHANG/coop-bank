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
exports.Branch = void 0;
const class_transformer_1 = require("class-transformer");
const moment_1 = __importDefault(require("moment"));
const date_constant_1 = require("../../constant/date.constant");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
const bank_representative_entity_1 = require("../bank-representative/bank-representative.entity");
let Branch = class Branch {
    constructor(branch_id) {
        this.branch_id = branch_id;
    }
};
exports.Branch = Branch;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Branch.prototype, "branch_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Branch.prototype, "branch_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "branch_province", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Branch.prototype, "interest_rate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "bank_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "branch_fax", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Branch.prototype, "phone_number_main", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "phone_number_sub", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "fax", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", String)
], Branch.prototype, "deleted_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", String)
], Branch.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", String)
], Branch.prototype, "updated_at", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'created_user' }),
    __metadata("design:type", users_entity_1.User)
], Branch.prototype, "created_user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => users_entity_1.User, (user) => user.branch),
    __metadata("design:type", Array)
], Branch.prototype, "users", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.created_user?.username),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Branch.prototype, "created_username", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.created_user?.full_name),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Branch.prototype, "created_fullname", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => bank_representative_entity_1.BankRepresentative, (bankRepresentative) => bankRepresentative.branches),
    __metadata("design:type", Array)
], Branch.prototype, "bankRepresentatives", void 0);
exports.Branch = Branch = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String])
], Branch);
//# sourceMappingURL=branch.entity.js.map