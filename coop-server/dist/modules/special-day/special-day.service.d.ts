import { Representative } from '../representative/representative.entity';
import { Repository } from 'typeorm';
import { AffiliateUnit } from '../affiliate-unit/entity/affiliate-unit.entity';
import { Individual } from '../individual/entity/individual.entity';
export declare class SpecialDayService {
    private representativeRepo;
    private affiliateUnitRepo;
    private individualRepo;
    constructor(representativeRepo: Repository<Representative>, affiliateUnitRepo: Repository<AffiliateUnit>, individualRepo: Repository<Individual>);
    getList(): Promise<{
        name: string;
        id: string;
        date: string;
        object_type: number;
        date_type: number;
        day_count: number;
    }[]>;
    _getListBirthDayRepresentative(currentDate: Date, remainingDays: number): Promise<{
        name: string;
        id: string;
        date: string;
        object_type: number;
        date_type: number;
        day_count: number;
    }[]>;
    _getListFoundingDateAffiliateUnit(currentDate: Date, remainingDays: number): Promise<{
        name: string;
        id: string;
        date: string;
        object_type: number;
        date_type: number;
        day_count: number;
    }[]>;
    _getListEffectiveDateFromRepresentative(currentDate: Date, remainingDays: number): Promise<{
        name: string;
        id: string;
        date: string;
        object_type: number;
        date_type: number;
        day_count: number;
    }[]>;
    _getListEffectiveDateEndRepresentative(currentDate: Date, remainingDays: number): Promise<{
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
    getNotifyCount(): Promise<number>;
    exportExcel(): Promise<any>;
    _getDateName(dateType: number): "Không xác định" | "Ngày sinh nhật" | "Ngày thành lập" | "Ngày bắt đầu nhiệm kỳ" | "Ngày kết thúc nhiệm kỳ";
    _getObjectName(objectType: number): "Hiệu trưởng" | "Cá nhân" | "Đơn vị liên kết";
}
