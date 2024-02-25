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
exports.CreateGiftDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const validation_1 = require("../../../common/validation");
const affiliate_unit_entity_1 = require("../../affiliate-unit/entity/affiliate-unit.entity");
const users_entity_1 = require("../../users/users.entity");
class CreateGiftDto {
}
exports.CreateGiftDto = CreateGiftDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGiftDto.prototype, "gift_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateGiftDto.prototype, "gift_content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGiftDto.prototype, "gift_description", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, validation_1.IsDateFormat)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGiftDto.prototype, "gift_date", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGiftDto.prototype, "gift_image_1", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGiftDto.prototype, "gift_image_2", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGiftDto.prototype, "gift_image_3", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", users_entity_1.User)
], CreateGiftDto.prototype, "created_user", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", users_entity_1.User)
], CreateGiftDto.prototype, "giver_user", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", affiliate_unit_entity_1.AffiliateUnit)
], CreateGiftDto.prototype, "affiliate_unit", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateGiftDto.prototype, "giver_user_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateGiftDto.prototype, "affiliate_unit_id", void 0);
//# sourceMappingURL=create-gift.dto.js.map