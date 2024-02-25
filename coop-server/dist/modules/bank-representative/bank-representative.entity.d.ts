import { User } from '../users/users.entity';
import { Gender } from 'src/types/data-type';
import { Branch } from '../branch/branch.entity';
export declare class BankRepresentative {
    bank_representative_id: string;
    bank_representative_name: string;
    bank_representative_email: string;
    bank_representative_position: number;
    phone_number: string;
    address: string;
    gender: Gender;
    birth_date: string;
    id_number: string;
    id_issued_by: string;
    id_issued_date: string;
    deleted_at: string;
    created_at: string;
    updated_at: string;
    branches: Branch[];
    created_user: User;
    created_username: string;
    created_fullname: string;
    constructor(bank_representative_id: string);
}
