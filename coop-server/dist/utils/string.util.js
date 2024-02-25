"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCurrency = exports.formatCurrency = exports.joinString = exports.generateRandomFileName = exports.generateId = void 0;
const uuid_1 = require("uuid");
const read_vietnamese_number_1 = require("read-vietnamese-number");
const common_1 = require("@nestjs/common");
function generateId() {
    return (0, uuid_1.v4)();
}
exports.generateId = generateId;
function generateRandomFileName(extension) {
    const timestamp = new Date().getTime();
    const randomString = Math.random().toString(36).substring(2, 8);
    const fileName = `${timestamp}_${randomString}.${extension}`;
    return fileName;
}
exports.generateRandomFileName = generateRandomFileName;
function joinString(list, separator) {
    return list?.filter((item) => item).join(separator);
}
exports.joinString = joinString;
const formatCurrency = (value, seperator = '.') => {
    return value.toLocaleString()?.replaceAll(',', seperator);
};
exports.formatCurrency = formatCurrency;
function readCurrency(money, unit = 'đồng') {
    const config = new read_vietnamese_number_1.ReadingConfig();
    config.unit = [unit];
    try {
        const result = (0, read_vietnamese_number_1.doReadNumber)(config, money);
        const [firstWord, ...rest] = result.split(' ');
        const firstWordCaptilized = firstWord.charAt(0).toUpperCase() + firstWord.substring(1);
        return [firstWordCaptilized, ...rest].join(' ') + ' chẵn';
    }
    catch (err) {
        if (err instanceof read_vietnamese_number_1.InvalidFormatError) {
            throw new common_1.BadRequestException('Định dạng input không hợp lệ');
        }
        else if (err instanceof read_vietnamese_number_1.InvalidNumberError) {
            throw new common_1.BadRequestException('Số không hợp lệ');
        }
        else if (err instanceof read_vietnamese_number_1.NotEnoughUnitError) {
            throw new common_1.BadRequestException('Không đủ đơn vị đọc số');
        }
    }
}
exports.readCurrency = readCurrency;
//# sourceMappingURL=string.util.js.map