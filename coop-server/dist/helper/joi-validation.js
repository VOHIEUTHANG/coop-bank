"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function JoiValidation(ValidationSchema, data) {
    const { error, value } = ValidationSchema.validate(data);
    if (error) {
        throw new Error(`Config validation error: ${error.message}`);
    }
    return value;
}
exports.default = JoiValidation;
//# sourceMappingURL=joi-validation.js.map