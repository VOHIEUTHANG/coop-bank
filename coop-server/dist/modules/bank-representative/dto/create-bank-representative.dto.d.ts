import { User } from 'src/modules/users/users.entity';
export declare class CreateBankRepresentativeDto {
    bank_representative_id: string;
    bank_representative_name: string;
    bank_representative_email: string;
    phone_number: string;
    bank_representative_position: number;
    gender: number;
    address: string;
    birth_date: string;
    id_number: string;
    id_issued_by: string;
    id_issued_date: string;
    created_user: User;
}
