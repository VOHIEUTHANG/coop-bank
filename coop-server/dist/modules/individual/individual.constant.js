"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUALIFICATION_TYPE = exports.EXPORT_TYPE = exports.Position = void 0;
var Position;
(function (Position) {
    Position[Position["Director"] = 0] = "Director";
    Position[Position["ViceDirector"] = 1] = "ViceDirector";
    Position[Position["Accountant"] = 2] = "Accountant";
    Position[Position["Principal"] = 3] = "Principal";
    Position[Position["VicePrincipal"] = 4] = "VicePrincipal";
})(Position || (exports.Position = Position = {}));
exports.EXPORT_TYPE = {
    CASH_RECEIPT: 1,
    BANK_RECEIPT: 2,
    DEBIT_RECEIPT: 3,
    CONTRACT_60_50: 4,
    CONTRACT_60_60: 5,
    APPRAISAL_REPORT: 6
};
exports.QUALIFICATION_TYPE = {
    QUALIFIED: 1,
    UNQUALIFIED: 0
};
//# sourceMappingURL=individual.constant.js.map