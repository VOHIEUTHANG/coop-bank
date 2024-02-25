"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = exports.DATABASE_CONFIG = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const enviroment_helper_1 = require("../helper/enviroment.helper");
const joi_1 = __importDefault(require("joi"));
const joi_validation_1 = __importDefault(require("../helper/joi-validation"));
const application_1 = require("./application");
const application_constant_1 = require("../constant/application.constant");
(0, dotenv_1.config)({ path: (0, enviroment_helper_1.getEnvPath)() });
exports.DATABASE_CONFIG = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*{.ts,.js}'],
    autoLoadEntities: true,
    synchronize: [application_constant_1.NODE_ENV.DEVELOPMENT, application_constant_1.NODE_ENV.TEST].includes(application_1.APPLICATION_CONFIG.nodenv),
    migrationsRun: application_1.APPLICATION_CONFIG.nodenv === application_constant_1.NODE_ENV.PRODUCTION
};
exports.default = (0, config_1.registerAs)('database', () => {
    const validatonSchema = joi_1.default.object({
        host: joi_1.default.string().required(),
        port: joi_1.default.number().required(),
        username: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
        database: joi_1.default.string().required()
    }).unknown(true);
    return (0, joi_validation_1.default)(validatonSchema, exports.DATABASE_CONFIG);
});
exports.connectionSource = new typeorm_1.DataSource(exports.DATABASE_CONFIG);
//# sourceMappingURL=database.js.map