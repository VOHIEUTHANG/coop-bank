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
exports.CreateRepresentativeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const validation_1 = require("../../../common/validation");
const users_entity_1 = require("../../users/users.entity");
const data_type_1 = require("../../../types/data-type");
class CreateRepresentativeDto {
}
exports.CreateRepresentativeDto = CreateRepresentativeDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "representative_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "representative_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Email không đúng định dạng' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "representative_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsPhoneNumber)('VN', { message: 'Số điện thoại không đúng định dạng' }),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateRepresentativeDto.prototype, "representative_position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(data_type_1.Gender),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateRepresentativeDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "bank_number", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "bank_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "tax_code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "id_number", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "id_front_image", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "id_back_image", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "id_issued_by", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "id_issued_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "decision_number", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "decision_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "effective_date_from", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "effective_date_to", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "decision_district", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "decider_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateRepresentativeDto.prototype, "decider_position", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", users_entity_1.User)
], CreateRepresentativeDto.prototype, "created_user", void 0);
//# sourceMappingURL=create-representative.dto.js.map