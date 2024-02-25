export declare function generateId(): string;
export declare function generateRandomFileName(extension: string): string;
export declare function joinString(list: string[], separator: string): string;
export declare const formatCurrency: (value: number, seperator?: string) => string;
export declare function readCurrency(money: string | bigint, unit?: string): string;
