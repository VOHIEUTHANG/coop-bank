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
exports.SpecialDayController = void 0;
const common_1 = require("@nestjs/common");
const special_day_service_1 = require("./special-day.service");
const swagger_1 = require("@nestjs/swagger");
let SpecialDayController = class SpecialDayController {
    constructor(service) {
        this.service = service;
    }
    getList() {
        return this.service.getList();
    }
    getListNotify() {
        return this.service.getListNotify();
    }
    getListNotifyCount() {
        return this.service.getNotifyCount();
    }
    async exportExcel(res) {
        const wb = await this.service.exportExcel();
        wb.write('gift.xlsx', res);
    }
};
exports.SpecialDayController = SpecialDayController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpecialDayController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('notify'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpecialDayController.prototype, "getListNotify", null);
__decorate([
    (0, common_1.Get)('notify-count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SpecialDayController.prototype, "getListNotifyCount", null);
__decorate([
    (0, common_1.Get)('export-excel'),
    __param(0, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialDayController.prototype, "exportExcel", null);
exports.SpecialDayController = SpecialDayController = __decorate([
    (0, swagger_1.ApiTags)('Special Day'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('special-day'),
    __metadata("design:paramtypes", [special_day_service_1.SpecialDayService])
], SpecialDayController);
//# sourceMappingURL=special-day.controller.js.map