"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_session_1 = __importDefault(require("cookie-session"));
const CookieSessionMiddleware = (key) => (0, cookie_session_1.default)({
    keys: [key]
});
exports.default = CookieSessionMiddleware;
//# sourceMappingURL=cookie-session.middleware.js.map