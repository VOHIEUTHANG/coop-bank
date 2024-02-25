import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';
import { User } from 'src/modules/users/users.entity';
export declare class CreateGiftDto {
    gift_id: string;
    gift_content: string;
    gift_description: string;
    gift_date: string;
    gift_image_1: string;
    gift_image_2: string;
    gift_image_3: string;
    created_user: User;
    giver_user: User;
    affiliate_unit: AffiliateUnit;
    giver_user_id: number;
    affiliate_unit_id: string;
}
