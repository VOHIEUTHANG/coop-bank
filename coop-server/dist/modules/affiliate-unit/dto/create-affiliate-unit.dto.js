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
exports.CreateAffilicateUnitDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const validation_1 = require("../../../common/validation");
const users_entity_1 = require("../../users/users.entity");
class CreateAffilicateUnitDto {
}
exports.CreateAffilicateUnitDto = CreateAffilicateUnitDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_name", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_code", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_address", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAffilicateUnitDto.prototype, "paid_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsPhoneNumber)('VN', { message: 'Số điện thoại không đúng định dạng' }),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_phone", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_fax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_image_1", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_image_2", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "affiliate_unit_paycheck", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAffilicateUnitDto.prototype, "founding_date", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", users_entity_1.User)
], CreateAffilicateUnitDto.prototype, "created_user", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateAffilicateUnitDto.prototype, "representatives", void 0);
//# sourceMappingURL=create-affiliate-unit.dto.js.map