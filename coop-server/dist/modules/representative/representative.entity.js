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
exports.Representative = void 0;
const class_transformer_1 = require("class-transformer");
const moment_1 = __importDefault(require("moment"));
const date_constant_1 = require("../../constant/date.constant");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
const data_type_1 = require("../../types/data-type");
const application_1 = require("../../config/application");
const affiliate_unit_entity_1 = require("../affiliate-unit/entity/affiliate-unit.entity");
let Representative = class Representative {
};
exports.Representative = Representative;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Representative.prototype, "representative_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Representative.prototype, "representative_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "representative_email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Representative.prototype, "representative_position", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Representative.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Representative.prototype, "bank_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Representative.prototype, "bank_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Representative.prototype, "tax_code", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)),
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Representative.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], Representative.prototype, "id_number", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && `${application_1.APPLICATION_CONFIG.base_url}/${value}`),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "id_front_image", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && `${application_1.APPLICATION_CONFIG.base_url}/${value}`),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "id_back_image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Representative.prototype, "id_issued_by", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)),
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Representative.prototype, "id_issued_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Representative.prototype, "decision_number", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)),
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Representative.prototype, "decision_date", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)),
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Representative.prototype, "effective_date_from", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)),
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Representative.prototype, "effective_date_to", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "decision_district", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "decider_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "decider_position", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", String)
], Representative.prototype, "deleted_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", String)
], Representative.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", String)
], Representative.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => affiliate_unit_entity_1.AffiliateUnit, (affiliateUnit) => affiliateUnit.representatives),
    (0, typeorm_1.JoinTable)({ name: 'representative_affiliate_unit' }),
    __metadata("design:type", affiliate_unit_entity_1.AffiliateUnit)
], Representative.prototype, "affiliateUnits", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'created_user' }),
    __metadata("design:type", users_entity_1.User)
], Representative.prototype, "created_user", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.created_user?.username),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Representative.prototype, "created_username", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.created_user?.full_name),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Representative.prototype, "created_fullname", void 0);
exports.Representative = Representative = __decorate([
    (0, typeorm_1.Entity)()
], Representative);
//# sourceMappingURL=representative.entity.js.map