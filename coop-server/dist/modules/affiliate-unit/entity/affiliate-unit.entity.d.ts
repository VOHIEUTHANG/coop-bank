import { User } from '../../users/users.entity';
import { Representative } from 'src/modules/representative/representative.entity';
import { Individual } from 'src/modules/individual/entity/individual.entity';
export declare class AffiliateUnit {
    constructor(affiliateUnitId: string);
    affiliate_unit_id: string;
    affiliate_unit_name: string;
    affiliate_unit_code: string;
    affiliate_unit_level: number;
    affiliate_unit_address: string;
    affiliate_unit_phone: string;
    affiliate_unit_fax: string;
    paid_date: number;
    affiliate_unit_image_1: string;
    affiliate_unit_image_2: string;
    affiliate_unit_paycheck: string;
    founding_date: string;
    deleted_at: string;
    created_at: string;
    updated_at: string;
    representatives: Representative[];
    individuals: Individual[];
    created_user: User;
    created_username: string;
    created_fullname: string;
}
