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
exports.BankRepresentativeController = void 0;
const common_1 = require("@nestjs/common");
const bank_representative_service_1 = require("./bank-representative.service");
const update_bank_representative_dto_1 = require("./dto/update-bank-representative.dto");
const create_bank_representative_dto_1 = require("./dto/create-bank-representative.dto");
const swagger_1 = require("@nestjs/swagger");
const filter_bank_representative_dto_1 = require("./dto/filter-bank-representative.dto");
let BankRepresentativeController = class BankRepresentativeController {
    constructor(bankRepresentativeService) {
        this.bankRepresentativeService = bankRepresentativeService;
    }
    create(createData, request) {
        return this.bankRepresentativeService.create(createData, request.user.sub);
    }
    getList(filter) {
        return this.bankRepresentativeService.find(filter);
    }
    getById(bank_representative_id) {
        return this.bankRepresentativeService.findOne(bank_representative_id);
    }
    update(updateData) {
        return this.bankRepresentativeService.update(updateData);
    }
    delete(bank_representative_id) {
        return this.bankRepresentativeService.delete(bank_representative_id);
    }
};
exports.BankRepresentativeController = BankRepresentativeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bank_representative_dto_1.CreateBankRepresentativeDto, Object]),
    __metadata("design:returntype", void 0)
], BankRepresentativeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_bank_representative_dto_1.FilterBankRepresentativeDto]),
    __metadata("design:returntype", void 0)
], BankRepresentativeController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)(':bank_representative_id'),
    __param(0, (0, common_1.Param)('bank_representative_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BankRepresentativeController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_bank_representative_dto_1.UpdateBankRepresentativeDto]),
    __metadata("design:returntype", void 0)
], BankRepresentativeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':bank_representative_id'),
    __param(0, (0, common_1.Param)('bank_representative_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BankRepresentativeController.prototype, "delete", null);
exports.BankRepresentativeController = BankRepresentativeController = __decorate([
    (0, swagger_1.ApiTags)('Bank Representative'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('bank-representative'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [bank_representative_service_1.BankRepresentativeService])
], BankRepresentativeController);
//# sourceMappingURL=bank-representative.controller.js.map