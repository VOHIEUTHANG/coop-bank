export declare class FileService {
    detectFileType(base64String: string): string;
    saveBase64ToFile(base64String: string, fileFolder: string): string;
    saveFileField(object: any, fieldName: string, folderName?: string): void;
}
