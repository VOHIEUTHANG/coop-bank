"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APPLICATION_CONFIG = void 0;
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const joi_1 = __importDefault(require("joi"));
const enviroment_helper_1 = require("../helper/enviroment.helper");
const joi_validation_1 = __importDefault(require("../helper/joi-validation"));
const application_constant_1 = require("../constant/application.constant");
(0, dotenv_1.config)({ path: (0, enviroment_helper_1.getEnvPath)() });
exports.APPLICATION_CONFIG = {
    port: parseInt(process.env.PORT),
    nodenv: process.env.NODE_ENV,
    cookie_key: process.env.COOKIE_KEY,
    jwt_secret: process.env.JWT_SECRET
};
exports.default = (0, config_1.registerAs)('application', () => {
    const validatonSchema = joi_1.default.object({
        port: joi_1.default.number().required(),
        nodenv: joi_1.default.string().valid(...Object.values(application_constant_1.NODE_ENV)),
        cookie_key: joi_1.default.string().required(),
        jwt_secret: joi_1.default.string().required()
    }).unknown(true);
    return (0, joi_validation_1.default)(validatonSchema, exports.APPLICATION_CONFIG);
});
//# sourceMappingURL=application.js.map