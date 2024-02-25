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
exports.AffiliateUnit = void 0;
const class_transformer_1 = require("class-transformer");
const moment_1 = __importDefault(require("moment"));
const date_constant_1 = require("../../../constant/date.constant");
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../../users/users.entity");
const application_1 = require("../../../config/application");
const representative_entity_1 = require("../../representative/representative.entity");
const individual_entity_1 = require("../../individual/entity/individual.entity");
let AffiliateUnit = class AffiliateUnit {
    constructor(affiliateUnitId) {
        this.affiliate_unit_id = affiliateUnitId;
    }
};
exports.AffiliateUnit = AffiliateUnit;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AffiliateUnit.prototype, "affiliate_unit_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_fax", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], AffiliateUnit.prototype, "paid_date", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && `${application_1.APPLICATION_CONFIG.base_url}/${value}`),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_image_1", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && `${application_1.APPLICATION_CONFIG.base_url}/${value}`),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_image_2", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && `${application_1.APPLICATION_CONFIG.base_url}/${value}`),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "affiliate_unit_paycheck", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)),
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "founding_date", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "deleted_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => representative_entity_1.Representative, (representative) => representative.affiliateUnits, {
        eager: true
    }),
    __metadata("design:type", Array)
], AffiliateUnit.prototype, "representatives", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => individual_entity_1.Individual, (individual) => individual.affiliate_unit),
    __metadata("design:type", Array)
], AffiliateUnit.prototype, "individuals", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'created_user' }),
    __metadata("design:type", users_entity_1.User)
], AffiliateUnit.prototype, "created_user", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.created_user?.username),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "created_username", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.created_user?.full_name),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], AffiliateUnit.prototype, "created_fullname", void 0);
exports.AffiliateUnit = AffiliateUnit = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String])
], AffiliateUnit);
//# sourceMappingURL=affiliate-unit.entity.js.map