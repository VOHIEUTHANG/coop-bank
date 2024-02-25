import { User } from 'src/modules/users/users.entity';
export declare class CreateRepresentativeDto {
    representative_id: string;
    representative_name: string;
    representative_email: string;
    phone_number: string;
    representative_position: number;
    gender: number;
    address: string;
    bank_number: string;
    bank_name: string;
    tax_code: string;
    birth_date: string;
    id_number: string;
    id_front_image: string;
    id_back_image: string;
    id_issued_by: string;
    id_issued_date: string;
    decision_number: string;
    decision_date: string;
    effective_date_from: string;
    effective_date_to: string;
    decision_district: string;
    decider_name: string;
    decider_position: string;
    created_user: User;
}
