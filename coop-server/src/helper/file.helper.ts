import { Injectable } from '@nestjs/common';
import fs from 'fs';
import path from 'path';
import { generateRandomFileName } from 'src/utils/string.util';
import base64Helper from './base64.helper';

@Injectable()
export class FileService {
  detectFileType(base64String: string): string {
    const mimeTypeMatch = base64String.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,/);

    if (mimeTypeMatch && mimeTypeMatch[1]) {
      return mimeTypeMatch[1].split('/')[1];
    }

    return 'bin';
  }

  saveBase64ToFile(base64String: string, fileFolder: string): string {
    const fileType = this.detectFileType(base64String);
    const fileName = generateRandomFileName(fileType);

    const base64Data = base64String.replace(/^data:[^;]+;base64,/, '');

    const filePath = path.join(fileFolder, fileName);

    fs.writeFileSync(filePath, base64Data, 'base64');

    return filePath?.replaceAll('\\', '/');
  }

  saveFileField(object: any, fieldName: string, folderName: string = 'images') {
    const fileUrl = base64Helper.isBase64(object[fieldName])
      ? this.saveBase64ToFile(object[fieldName], 'public/' + folderName)
      : object[fieldName];

    object[fieldName] = fileUrl;
  }
}
