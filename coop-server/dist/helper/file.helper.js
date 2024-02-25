"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const string_util_1 = require("../utils/string.util");
const base64_helper_1 = __importDefault(require("./base64.helper"));
const application_1 = require("../config/application");
let FileService = class FileService {
    detectFileType(base64String) {
        const mimeTypeMatch = base64String.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/);
        if (mimeTypeMatch && mimeTypeMatch[1]) {
            return mimeTypeMatch[1].split('/')[1];
        }
        return 'bin';
    }
    saveBase64ToFile(base64String, fileFolder) {
        const fileType = this.detectFileType(base64String);
        const fileName = (0, string_util_1.generateRandomFileName)(fileType);
        const base64Data = base64String.replace(/^data:[^;]+;base64,/, '');
        const filePath = path_1.default.join(fileFolder, fileName);
        fs_1.default.writeFileSync(filePath, base64Data, 'base64');
        return filePath?.replaceAll('\\', '/');
    }
    saveFileField(object, fieldName, folderName = 'images') {
        const fileUrl = base64_helper_1.default.isBase64(object[fieldName])
            ? this.saveBase64ToFile(object[fieldName], 'public/' + folderName)
            : object[fieldName]?.startsWith(application_1.APPLICATION_CONFIG.base_url)
                ? object[fieldName]?.substring(application_1.APPLICATION_CONFIG.base_url.length + 1)
                : object[fieldName];
        object[fieldName] = fileUrl;
    }
};
exports.FileService = FileService;
exports.FileService = FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
//# sourceMappingURL=file.helper.js.map