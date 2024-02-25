"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reponse = void 0;
class Reponse {
    constructor(data, statusCode, message = 'success', error) {
        this.data = data;
        this.statusCode = statusCode;
        this.message = message;
        this.error = error;
    }
}
exports.Reponse = Reponse;
//# sourceMappingURL=response.js.map