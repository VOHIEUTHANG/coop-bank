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
exports.BranchController = void 0;
const common_1 = require("@nestjs/common");
const branch_service_1 = require("./branch.service");
const update_branch_dto_1 = require("./dto/update-branch.dto");
const create_branch_dto_1 = require("./dto/create-branch.dto");
const swagger_1 = require("@nestjs/swagger");
const filter_branch_dto_1 = require("./dto/filter-branch.dto");
let BranchController = class BranchController {
    constructor(branchService) {
        this.branchService = branchService;
    }
    create(branch, request) {
        return this.branchService.create(branch, request.user.sub);
    }
    getList(filter) {
        return this.branchService.find(filter);
    }
    getOptions() {
        return this.branchService.getOptions();
    }
    getById(branch_id) {
        return this.branchService.findOne(branch_id);
    }
    update(updateBranchDto) {
        return this.branchService.update(updateBranchDto);
    }
    delete(branch_id) {
        return this.branchService.delete(branch_id);
    }
};
exports.BranchController = BranchController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_branch_dto_1.CreateBranchDto, Object]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_branch_dto_1.FilterBranchDto]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)('options'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "getOptions", null);
__decorate([
    (0, common_1.Get)(':branch_id'),
    __param(0, (0, common_1.Param)('branch_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_branch_dto_1.UpdateBranchDto]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':branch_id'),
    __param(0, (0, common_1.Param)('branch_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BranchController.prototype, "delete", null);
exports.BranchController = BranchController = __decorate([
    (0, swagger_1.ApiTags)('Branch'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('branch'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [branch_service_1.BranchService])
], BranchController);
//# sourceMappingURL=branch.controller.js.map