"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeData = void 0;
const moment_1 = __importDefault(require("moment"));
const rxjs_1 = require("rxjs");
const date_constant_1 = require("../constant/date.constant");
const response_1 = require("../types/response");
class SerializeData {
    intercept(context, handler) {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode;
        const request = context.switchToHttp().getRequest();
        request.query.search = request.query.search || '';
        request.query.created_date_from =
            request.query.created_date_from &&
                (0, moment_1.default)(request.query.created_date_from, date_constant_1.DATE_FORMAT_DDMMYYYY)
                    ?.startOf('day')
                    ?.format(date_constant_1.DATE_FORMAT_YYYYMMDDHHMMSS);
        request.query.created_date_to =
            request.query.created_date_to &&
                (0, moment_1.default)(request.query.created_date_to, date_constant_1.DATE_FORMAT_DDMMYYYY)
                    ?.endOf('day')
                    ?.format(date_constant_1.DATE_FORMAT_YYYYMMDDHHMMSS);
        return handler.handle().pipe((0, rxjs_1.map)((data) => {
            return new response_1.Reponse(data, statusCode);
        }));
    }
}
exports.SerializeData = SerializeData;
//# sourceMappingURL=serialize-data.interceptor.js.map