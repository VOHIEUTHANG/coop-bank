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
exports.Individual = void 0;
const class_transformer_1 = require("class-transformer");
const moment_1 = __importDefault(require("moment"));
const date_constant_1 = require("../../../constant/date.constant");
const typeorm_1 = require("typeorm");
const data_type_1 = require("../../../types/data-type");
const users_entity_1 = require("../../users/users.entity");
const affiliate_unit_entity_1 = require("../../affiliate-unit/entity/affiliate-unit.entity");
let Individual = class Individual {
};
exports.Individual = Individual;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Individual.prototype, "individual_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Individual.prototype, "individual_fullname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "current_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "origin_address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Individual.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)),
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], Individual.prototype, "id_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "id_front_image", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "id_back_image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Individual.prototype, "id_issued_by", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_FORMAT_DDMMYYYY)),
    (0, typeorm_1.Column)({ type: 'datetime' }),
    __metadata("design:type", String)
], Individual.prototype, "id_issued_date", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => {
        try {
            return value && JSON.parse(value);
        }
        catch (error) {
            console.error('Parse json export data field error !');
        }
    }),
    (0, typeorm_1.Column)({ nullable: true, length: 1000 }),
    __metadata("design:type", String)
], Individual.prototype, "export_data", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "salary_file", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "marriage_file", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "appoint_file", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToOne)(() => affiliate_unit_entity_1.AffiliateUnit, (affiliateUnit) => affiliateUnit.individuals, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'affiliate_unit_id' }),
    __metadata("design:type", affiliate_unit_entity_1.AffiliateUnit)
], Individual.prototype, "affiliate_unit", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.affiliate_unit?.affiliate_unit_id),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Individual.prototype, "affiliate_unit_id", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.affiliate_unit?.affiliate_unit_name),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Individual.prototype, "affiliate_unit_name", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", String)
], Individual.prototype, "deleted_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' }),
    __metadata("design:type", String)
], Individual.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value && (0, moment_1.default)(value).format(date_constant_1.DATE_TIME_FORMAT)),
    (0, typeorm_1.UpdateDateColumn)({
        type: 'timestamp',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
    }),
    __metadata("design:type", String)
], Individual.prototype, "updated_at", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.ManyToOne)(() => users_entity_1.User, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'created_user' }),
    __metadata("design:type", users_entity_1.User)
], Individual.prototype, "created_user", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.created_user?.username),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Individual.prototype, "created_username", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ obj }) => obj.created_user?.full_name),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], Individual.prototype, "created_fullname", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], Individual.prototype, "interest_rate", void 0);
exports.Individual = Individual = __decorate([
    (0, typeorm_1.Entity)()
], Individual);
//# sourceMappingURL=individual.entity.js.map