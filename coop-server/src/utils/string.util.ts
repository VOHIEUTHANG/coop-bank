import { v4 as uuidv4 } from 'uuid';

export function generateId(): string {
  return uuidv4();
}

export function generateRandomFileName(extension: string) {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);
  const fileName = `${timestamp}_${randomString}.${extension}`;
  return fileName;
}
