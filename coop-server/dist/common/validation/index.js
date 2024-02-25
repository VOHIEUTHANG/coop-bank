"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDateFormat = exports.IsDateFormatConstraint = void 0;
const class_validator_1 = require("class-validator");
let IsDateFormatConstraint = class IsDateFormatConstraint {
    validate(value) {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(value);
    }
    defaultMessage() {
        return 'Định dạng ngày tháng không hợp lệ. Sử dụng DD/MM/YYYY.';
    }
};
exports.IsDateFormatConstraint = IsDateFormatConstraint;
exports.IsDateFormatConstraint = IsDateFormatConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], IsDateFormatConstraint);
function IsDateFormat(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsDateFormatConstraint
        });
    };
}
exports.IsDateFormat = IsDateFormat;
//# sourceMappingURL=index.js.map