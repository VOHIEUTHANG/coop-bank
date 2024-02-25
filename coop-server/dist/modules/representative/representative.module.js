"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepresentativeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const representative_entity_1 = require("./representative.entity");
const representative_controller_1 = require("./representative.controller");
const representative_service_1 = require("./representative.service");
const file_helper_1 = require("../../helper/file.helper");
let RepresentativeModule = class RepresentativeModule {
};
exports.RepresentativeModule = RepresentativeModule;
exports.RepresentativeModule = RepresentativeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([representative_entity_1.Representative]), users_module_1.UsersModule],
        controllers: [representative_controller_1.RepresentativeController],
        providers: [representative_service_1.RepresentativeService, file_helper_1.FileService],
        exports: [representative_service_1.RepresentativeService]
    })
], RepresentativeModule);
//# sourceMappingURL=representative.module.js.map