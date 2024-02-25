"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBankRepresentativePositionName = exports.BankRepresentativePosition = void 0;
var BankRepresentativePosition;
(function (BankRepresentativePosition) {
    BankRepresentativePosition[BankRepresentativePosition["DIRECTOR"] = 1] = "DIRECTOR";
    BankRepresentativePosition[BankRepresentativePosition["VICE_DIRECTOR"] = 2] = "VICE_DIRECTOR";
})(BankRepresentativePosition || (exports.BankRepresentativePosition = BankRepresentativePosition = {}));
function getBankRepresentativePositionName(position) {
    switch (position) {
        case BankRepresentativePosition.DIRECTOR:
            return 'Giám Đốc';
        case BankRepresentativePosition.VICE_DIRECTOR:
            return 'Phó Giám Đốc';
        default:
            return 'Không xác định';
    }
}
exports.getBankRepresentativePositionName = getBankRepresentativePositionName;
//# sourceMappingURL=bank-representative.constant.js.map