"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviroment = exports.getEnvPath = void 0;
const application_constant_1 = require("../constant/application.constant");
const getEnvPath = () => `.env${process.env.NODE_ENV ? '.' + process.env.NODE_ENV : ''}`;
exports.getEnvPath = getEnvPath;
const enviroment = process.env.NODE_ENV || application_constant_1.NODE_ENV.DEVELOPMENT;
exports.enviroment = enviroment;
//# sourceMappingURL=enviroment.helper.js.map