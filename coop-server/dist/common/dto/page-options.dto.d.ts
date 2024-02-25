import { SORT_TYPE } from 'src/constant/pagination.constant';
export declare class PageOptionsDto {
    readonly order?: SORT_TYPE;
    readonly page?: number;
    readonly limit?: number;
    get skip(): number;
}
