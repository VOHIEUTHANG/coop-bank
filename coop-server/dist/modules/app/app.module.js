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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("../users/users.module");
const core_1 = require("@nestjs/core");
const validation_pipe_middleware_1 = __importDefault(require("../../middleware/validation-pipe.middleware"));
const cookie_session_middleware_1 = __importDefault(require("../../middleware/cookie-session.middleware"));
const config_1 = require("@nestjs/config");
const application_1 = __importDefault(require("../../config/application"));
const database_1 = __importDefault(require("../../config/database"));
const auth_module_1 = require("../auth/auth.module");
const menu_module_1 = require("../menu/menu.module");
const branch_module_1 = require("../branch/branch.module");
const representative_module_1 = require("../representative/representative.module");
const bank_representative_module_1 = require("../bank-representative/bank-representative.module");
const affiliate_unit_module_1 = require("../affiliate-unit/affiliate-unit.module");
const individual_module_1 = require("../individual/individual.module");
const gift_module_1 = require("../gift/gift.module");
const schedule_1 = require("@nestjs/schedule");
const special_day_module_1 = require("../special-day/special-day.module");
const transaction_room_module_1 = require("../transaction-room/transaction-room.module");
let AppModule = class AppModule {
    constructor(config) {
        this.config = config;
    }
    configure(consumer) {
        consumer
            .apply((0, cookie_session_middleware_1.default)(this.config.get('application.cookie_key')))
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [application_1.default, database_1.default]
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get('database')
            }),
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            menu_module_1.MenuModule,
            branch_module_1.BranchModule,
            representative_module_1.RepresentativeModule,
            bank_representative_module_1.BankRepresentativeModule,
            affiliate_unit_module_1.AffiliateUnitModule,
            individual_module_1.IndividualModule,
            gift_module_1.GiftModule,
            special_day_module_1.SpecialDayModule,
            transaction_room_module_1.TransactionRoomModule
        ],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useValue: validation_pipe_middleware_1.default
            }
        ]
    }),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppModule);
//# sourceMappingURL=app.module.js.map