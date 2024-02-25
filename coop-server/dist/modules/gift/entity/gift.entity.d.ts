import { User } from '../../users/users.entity';
import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';
export declare class Gift {
    gift_id: string;
    gift_content: string;
    gift_description: string;
    gift_date: string;
    gift_image_1: string;
    gift_image_2: string;
    gift_image_3: string;
    affiliate_unit: AffiliateUnit;
    giver_user: User;
    deleted_at: string;
    created_at: string;
    updated_at: string;
    created_user: User;
    created_username: string;
    created_fullname: string;
    giver_user_id: number;
    giver_user_name: string;
    affiliate_unit_id: string;
    affiliate_unit_name: string;
}
