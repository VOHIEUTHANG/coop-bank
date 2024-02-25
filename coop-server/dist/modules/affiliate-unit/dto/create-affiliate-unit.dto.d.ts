import { Representative } from 'src/modules/representative/representative.entity';
import { User } from 'src/modules/users/users.entity';
export declare class CreateAffilicateUnitDto {
    affiliate_unit_id: string;
    affiliate_unit_name: string;
    affiliate_unit_code: string;
    affiliate_unit_level: number;
    affiliate_unit_address: string;
    paid_date: number;
    affiliate_unit_phone: string;
    affiliate_unit_fax: string;
    affiliate_unit_image_1: string;
    affiliate_unit_image_2: string;
    affiliate_unit_paycheck: string;
    founding_date: string;
    created_user: User;
    representatives: Representative[];
}
