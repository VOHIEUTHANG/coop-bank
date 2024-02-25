"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const SALT_ROUNDS = 10;
class PasswordHandler {
    constructor(saltRounds) {
        this.saltRounds = saltRounds;
    }
    hashPassword(password) {
        return bcrypt_1.default.hashSync(password, this.saltRounds);
    }
    comparePassword(password, hash) {
        return bcrypt_1.default.compareSync(password, hash);
    }
}
exports.default = new PasswordHandler(SALT_ROUNDS);
//# sourceMappingURL=hash-password.helper.js.map