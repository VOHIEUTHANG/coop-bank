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
exports.IndividualController = void 0;
const common_1 = require("@nestjs/common");
const individual_service_1 = require("./individual.service");
const swagger_1 = require("@nestjs/swagger");
const create_individual_dto_1 = require("./dto/create-individual.dto");
const filter_individual_dto_1 = require("./dto/filter-individual.dto");
const update_individual_dto_1 = require("./dto/update-individual.dto");
const export_form_dto_1 = require("./dto/export-form.dto");
const individual_constant_1 = require("./individual.constant");
let IndividualController = class IndividualController {
    constructor(service) {
        this.service = service;
    }
    create(createData, request) {
        return this.service.createOrUpdate(createData, request.user.sub);
    }
    getList(filter) {
        return this.service.find(filter);
    }
    getById(id, request) {
        return this.service.findOne(id, request.user);
    }
    update(updateData) {
        return this.service.createOrUpdate(updateData);
    }
    delete(id) {
        return this.service.delete(id);
    }
    async exportForm(individualId, query, response, request) {
        await this.service.saveExportData(individualId, query);
        let wordBuffer;
        switch (query.export_type) {
            case individual_constant_1.EXPORT_TYPE.APPRAISAL_REPORT:
                wordBuffer = await this.service.exportAppraisalReport(individualId, query, request.user.sub);
                break;
            case individual_constant_1.EXPORT_TYPE.BANK_RECEIPT:
                wordBuffer = await this.service.exportBankReceipt(individualId, query, request.user.sub);
                break;
            case individual_constant_1.EXPORT_TYPE.CASH_RECEIPT:
                wordBuffer = await this.service.exportCashReceipt(individualId, query, request.user.sub);
                break;
            case individual_constant_1.EXPORT_TYPE.CONTRACT_60_50:
                wordBuffer = await this.service.exportContract6050(individualId, query, request.user.sub);
                break;
            case individual_constant_1.EXPORT_TYPE.CONTRACT_60_60:
                wordBuffer = await this.service.exportContract6060(individualId, query, request.user.sub);
                break;
            case individual_constant_1.EXPORT_TYPE.DEBIT_RECEIPT:
                wordBuffer = await this.service.exportDebitReceipt(individualId, query, request.user.sub);
                break;
        }
        response.send(wordBuffer);
    }
};
exports.IndividualController = IndividualController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_individual_dto_1.CreateIndividualDto, Object]),
    __metadata("design:returntype", void 0)
], IndividualController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_individual_dto_1.FilterIndividualDto]),
    __metadata("design:returntype", void 0)
], IndividualController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], IndividualController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_individual_dto_1.UpdateIndividualDto]),
    __metadata("design:returntype", void 0)
], IndividualController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IndividualController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('export-form/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)(common_1.ValidationPipe)),
    __param(2, (0, common_1.Response)()),
    __param(3, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, export_form_dto_1.ExportFormIndividualDto, Object, Object]),
    __metadata("design:returntype", Promise)
], IndividualController.prototype, "exportForm", null);
exports.IndividualController = IndividualController = __decorate([
    (0, swagger_1.ApiTags)('Individual'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('individual'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [individual_service_1.IndividualService])
], IndividualController);
//# sourceMappingURL=individual.controller.js.map