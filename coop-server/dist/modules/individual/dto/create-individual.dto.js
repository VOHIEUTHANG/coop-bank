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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIndividualDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const validation_1 = require("../../../common/validation");
const affiliate_unit_entity_1 = require("../../affiliate-unit/entity/affiliate-unit.entity");
const users_entity_1 = require("../../users/users.entity");
const data_type_1 = require("../../../types/data-type");
class CreateIndividualDto {
}
exports.CreateIndividualDto = CreateIndividualDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "individual_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "individual_fullname", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsPhoneNumber)('VN', { message: 'Số điện thoại không đúng định dạng' }),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(data_type_1.Gender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateIndividualDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "current_address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "origin_address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "id_number", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "id_front_image", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "id_back_image", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "id_issued_by", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "id_issued_date", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => {
        return typeof value === 'string' ? value : value && JSON.stringify(value);
    }),
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "export_data", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "salary_file", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "marriage_file", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "appoint_file", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", users_entity_1.User)
], CreateIndividualDto.prototype, "created_user", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateIndividualDto.prototype, "affiliate_unit_id", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", affiliate_unit_entity_1.AffiliateUnit)
], CreateIndividualDto.prototype, "affiliate_unit", void 0);
//# sourceMappingURL=create-individual.dto.js.map