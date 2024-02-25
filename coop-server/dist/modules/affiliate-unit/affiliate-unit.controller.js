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
exports.AffiliateUnitController = void 0;
const common_1 = require("@nestjs/common");
const affiliate_unit_service_1 = require("./affiliate-unit.service");
const swagger_1 = require("@nestjs/swagger");
const create_affiliate_unit_dto_1 = require("./dto/create-affiliate-unit.dto");
const filter_affiliate_unit_dto_1 = require("./dto/filter-affiliate-unit.dto");
const update_affiliate_unit_dto_1 = require("./dto/update-affiliate-unit.dto");
const export_form_dto_1 = require("./dto/export-form.dto");
const affiliate_unit_constant_1 = require("./affiliate-unit.constant");
let AffiliateUnitController = class AffiliateUnitController {
    constructor(service) {
        this.service = service;
    }
    create(createData, request) {
        return this.service.create(createData, request.user.sub);
    }
    getList(filter) {
        return this.service.find(filter);
    }
    getOptions() {
        return this.service.getOptions();
    }
    async exportForm(affilateUnitId, query, response, request) {
        let wordBuffer;
        switch (query.export_type) {
            case affiliate_unit_constant_1.EXPORT_TYPE.AFFILATE_CONTRACT:
                wordBuffer = await this.service.exportAffilateContract(affilateUnitId, request.user.sub);
                break;
            case affiliate_unit_constant_1.EXPORT_TYPE.SERVICE_CONTRACT:
                wordBuffer = await this.service.exportServicentract(affilateUnitId, request.user.sub);
                break;
            case affiliate_unit_constant_1.EXPORT_TYPE.ASSIGN_PAY:
                wordBuffer = await this.service.exportAssignPay(affilateUnitId, request.user.sub);
                break;
            case affiliate_unit_constant_1.EXPORT_TYPE.PERIODICAL_CHECK:
                wordBuffer = await this.service.exportPeriodicalCheck(affilateUnitId, request.user.sub);
                break;
        }
        response.send(wordBuffer);
    }
    getById(id) {
        return this.service.findOne(id);
    }
    update(updateData) {
        return this.service.update(updateData);
    }
    delete(id) {
        return this.service.delete(id);
    }
};
exports.AffiliateUnitController = AffiliateUnitController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_affiliate_unit_dto_1.CreateAffilicateUnitDto, Object]),
    __metadata("design:returntype", void 0)
], AffiliateUnitController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_affiliate_unit_dto_1.FilterAffilicateUnitDto]),
    __metadata("design:returntype", void 0)
], AffiliateUnitController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AffiliateUnitController.prototype, "getOptions", null);
__decorate([
    (0, common_1.Get)('export-form/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)(common_1.ValidationPipe)),
    __param(2, (0, common_1.Response)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, export_form_dto_1.ExportFormAffilateUnitDto, Object, Object]),
    __metadata("design:returntype", Promise)
], AffiliateUnitController.prototype, "exportForm", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AffiliateUnitController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_affiliate_unit_dto_1.UpdateAffilicateUnitDto]),
    __metadata("design:returntype", void 0)
], AffiliateUnitController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AffiliateUnitController.prototype, "delete", null);
exports.AffiliateUnitController = AffiliateUnitController = __decorate([
    (0, swagger_1.ApiTags)('Affiliate Unit'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('affiliate-unit'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [affiliate_unit_service_1.AffiliateUnitService])
], AffiliateUnitController);
//# sourceMappingURL=affiliate-unit.controller.js.map