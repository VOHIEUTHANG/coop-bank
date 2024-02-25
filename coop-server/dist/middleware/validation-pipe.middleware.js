"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const ValidationPipeMiddleware = new common_1.ValidationPipe({
    whitelist: true
});
exports.default = ValidationPipeMiddleware;
//# sourceMappingURL=validation-pipe.middleware.js.map