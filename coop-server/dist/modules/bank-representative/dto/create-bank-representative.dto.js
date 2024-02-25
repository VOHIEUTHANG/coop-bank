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
exports.CreateBankRepresentativeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const validation_1 = require("../../../common/validation");
const users_entity_1 = require("../../users/users.entity");
const data_type_1 = require("../../../types/data-type");
class CreateBankRepresentativeDto {
}
exports.CreateBankRepresentativeDto = CreateBankRepresentativeDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "bank_representative_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "bank_representative_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEmail)({}, { message: 'Email không đúng định dạng' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "bank_representative_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsPhoneNumber)('VN', { message: 'Số điện thoại không đúng định dạng' }),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateBankRepresentativeDto.prototype, "bank_representative_position", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsEnum)(data_type_1.Gender, { message: 'Giới tính phải là giá trị Nam hoặc Nữ' }),
    __metadata("design:type", Number)
], CreateBankRepresentativeDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "id_number", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "id_issued_by", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBankRepresentativeDto.prototype, "id_issued_date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", users_entity_1.User)
], CreateBankRepresentativeDto.prototype, "created_user", void 0);
//# sourceMappingURL=create-bank-representative.dto.js.map