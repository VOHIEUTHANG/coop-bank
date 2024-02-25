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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftController = void 0;
const common_1 = require("@nestjs/common");
const gift_service_1 = require("./gift.service");
const swagger_1 = require("@nestjs/swagger");
const filter_gift_dto_1 = require("./dto/filter-gift.dto");
const create_gift_dto_1 = require("./dto/create-gift.dto");
const update_gift_dto_1 = require("./dto/update-gift.dto");
let GiftController = class GiftController {
    constructor(service) {
        this.service = service;
    }
    create(createData, request) {
        return this.service.createOrUpdate(createData, request.user.sub);
    }
    getList(filter) {
        return this.service.find(filter);
    }
    async exportExcel(res) {
        const wb = await this.service.exportExcel();
        wb.write('gift.xlsx', res);
    }
    getById(id) {
        return this.service.findOne(id);
    }
    update(updateData) {
        return this.service.createOrUpdate(updateData);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
exports.GiftController = GiftController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_gift_dto_1.CreateGiftDto, Object]),
    __metadata("design:returntype", void 0)
], GiftController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_gift_dto_1.FilterGiftDto]),
    __metadata("design:returntype", void 0)
], GiftController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('export-excel'),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GiftController.prototype, "exportExcel", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GiftController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_gift_dto_1.UpdateGiftDto]),
    __metadata("design:returntype", void 0)
], GiftController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GiftController.prototype, "delete", null);
exports.GiftController = GiftController = __decorate([
    (0, swagger_1.ApiTags)('Gift'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('gift'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [gift_service_1.GiftService])
], GiftController);
//# sourceMappingURL=gift.controller.js.map