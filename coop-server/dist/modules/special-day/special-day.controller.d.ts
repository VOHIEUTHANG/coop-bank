import { SpecialDayService } from './special-day.service';
export declare class SpecialDayController {
    private readonly service;
    constructor(service: SpecialDayService);
    getList(): Promise<{
        name: string;
        id: string;
        date: string;
        object_type: number;
        date_type: number;
        day_count: number;
    }[]>;
    getListNotify(): Promise<{
        subject: string;
    }[]>;
    getListNotifyCount(): Promise<number>;
    exportExcel(res: any): Promise<void>;
}
