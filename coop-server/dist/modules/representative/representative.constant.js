"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRepresentativePositionName = exports.RepresentativePosition = void 0;
var RepresentativePosition;
(function (RepresentativePosition) {
    RepresentativePosition[RepresentativePosition["PRINCIPAL"] = 1] = "PRINCIPAL";
    RepresentativePosition[RepresentativePosition["UNION_LEADER"] = 2] = "UNION_LEADER";
    RepresentativePosition[RepresentativePosition["ACCOUNTANT"] = 3] = "ACCOUNTANT";
    RepresentativePosition[RepresentativePosition["REPLACEMENT_REPRESENTATIVE"] = 4] = "REPLACEMENT_REPRESENTATIVE";
})(RepresentativePosition || (exports.RepresentativePosition = RepresentativePosition = {}));
function getRepresentativePositionName(position) {
    switch (position) {
        case RepresentativePosition.PRINCIPAL:
            return 'Hiệu Trưởng';
        case RepresentativePosition.UNION_LEADER:
            return 'Chủ tịch công đoàn';
        case RepresentativePosition.ACCOUNTANT:
            return 'Kế toán trưởng';
        case RepresentativePosition.REPLACEMENT_REPRESENTATIVE:
            return 'Người đại diện thay thế';
        default:
            return 'Không xác định';
    }
}
exports.getRepresentativePositionName = getRepresentativePositionName;
//# sourceMappingURL=representative.constant.js.map