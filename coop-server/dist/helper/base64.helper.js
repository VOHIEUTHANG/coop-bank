"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base64Helper {
    isBase64(str) {
        return str?.startsWith('data:');
    }
}
exports.default = new Base64Helper();
//# sourceMappingURL=base64.helper.js.map