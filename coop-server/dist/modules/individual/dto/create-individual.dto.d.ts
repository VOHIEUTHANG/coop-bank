import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';
import { User } from 'src/modules/users/users.entity';
export declare class CreateIndividualDto {
    individual_id: string;
    individual_fullname: string;
    phone_number: string;
    gender: number;
    current_address: string;
    origin_address: string;
    birth_date: string;
    id_number: string;
    id_front_image: string;
    id_back_image: string;
    id_issued_by: string;
    id_issued_date: string;
    export_data: string;
    salary_file: string;
    marriage_file: string;
    appoint_file: string;
    created_user: User;
    affiliate_unit_id: string;
    affiliate_unit: AffiliateUnit;
}
