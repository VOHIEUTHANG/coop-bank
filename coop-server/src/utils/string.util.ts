import { v4 as uuidv4 } from 'uuid';

import {
  InvalidFormatError,
  InvalidNumberError,
  NotEnoughUnitError,
  ReadingConfig,
  doReadNumber
} from 'read-vietnamese-number';
import { BadRequestException } from '@nestjs/common';

export function generateId(): string {
  return uuidv4();
}

export function generateRandomFileName(extension: string) {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);
  const fileName = `${timestamp}_${randomString}.${extension}`;
  return fileName;
}

export function joinString(list: string[], separator: string): string {
  return list?.filter((item) => item).join(separator);
}

export const formatCurrency = (value: number, seperator: string = '.') => {
  return value.toLocaleString()?.replaceAll(',', seperator);
};

export function readCurrency(money: string | bigint, unit: string = 'đồng') {
  const config = new ReadingConfig();
  config.unit = [unit];
  try {
    const result = doReadNumber(config, money);
    const [firstWord, ...rest] = result.split(' ');
    const firstWordCaptilized = firstWord.charAt(0).toUpperCase() + firstWord.substring(1);
    return [firstWordCaptilized, ...rest].join(' ') + ' chẵn';
  } catch (err) {
    if (err instanceof InvalidFormatError) {
      throw new BadRequestException('Định dạng input không hợp lệ');
    } else if (err instanceof InvalidNumberError) {
      throw new BadRequestException('Số không hợp lệ');
    } else if (err instanceof NotEnoughUnitError) {
      throw new BadRequestException('Không đủ đơn vị đọc số');
    }
  }
}
