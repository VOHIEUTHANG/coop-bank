"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialDayModule = void 0;
const common_1 = require("@nestjs/common");
const special_day_service_1 = require("./special-day.service");
const special_day_controller_1 = require("./special-day.controller");
const typeorm_1 = require("@nestjs/typeorm");
const representative_entity_1 = require("../representative/representative.entity");
const affiliate_unit_entity_1 = require("../affiliate-unit/entity/affiliate-unit.entity");
const individual_entity_1 = require("../individual/entity/individual.entity");
let SpecialDayModule = class SpecialDayModule {
};
exports.SpecialDayModule = SpecialDayModule;
exports.SpecialDayModule = SpecialDayModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([representative_entity_1.Representative, affiliate_unit_entity_1.AffiliateUnit, individual_entity_1.Individual])],
        controllers: [special_day_controller_1.SpecialDayController],
        providers: [special_day_service_1.SpecialDayService]
    })
], SpecialDayModule);
//# sourceMappingURL=special-day.module.js.map