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
exports.RepresentativeController = void 0;
const common_1 = require("@nestjs/common");
const representative_service_1 = require("./representative.service");
const update_representative_dto_1 = require("./dto/update-representative.dto");
const create_representative_dto_1 = require("./dto/create-representative.dto");
const swagger_1 = require("@nestjs/swagger");
const filter_representative_dto_1 = require("./dto/filter-representative.dto");
let RepresentativeController = class RepresentativeController {
    constructor(representativeService) {
        this.representativeService = representativeService;
    }
    create(createData, request) {
        return this.representativeService.create(createData, request.user.sub);
    }
    getList(filter) {
        return this.representativeService.find(filter);
    }
    getById(representative_id) {
        return this.representativeService.findOne(representative_id);
    }
    update(updateData) {
        return this.representativeService.update(updateData);
    }
    delete(representative_id) {
        return this.representativeService.delete(representative_id);
    }
};
exports.RepresentativeController = RepresentativeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_representative_dto_1.CreateRepresentativeDto, Object]),
    __metadata("design:returntype", void 0)
], RepresentativeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_representative_dto_1.FilterRepresentativeDto]),
    __metadata("design:returntype", void 0)
], RepresentativeController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)(':representative_id'),
    __param(0, (0, common_1.Param)('representative_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RepresentativeController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_representative_dto_1.UpdateRepresentativeDto]),
    __metadata("design:returntype", void 0)
], RepresentativeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':representative_id'),
    __param(0, (0, common_1.Param)('representative_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RepresentativeController.prototype, "delete", null);
exports.RepresentativeController = RepresentativeController = __decorate([
    (0, swagger_1.ApiTags)('Representative'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.Controller)('representative'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [representative_service_1.RepresentativeService])
], RepresentativeController);
//# sourceMappingURL=representative.controller.js.map