import { PageOptionsDto } from './page-options.dto';
export declare class PageDto<T> {
    readonly items: T[];
    readonly itemsPerPage: number;
    readonly page: number;
    readonly totalItems: number;
    readonly totalPages: number;
    readonly meta: any;
    constructor(data: T[], pageOptionsDto: PageOptionsDto, itemCount: number, meta?: any);
}
