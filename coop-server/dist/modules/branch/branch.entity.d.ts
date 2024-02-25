import { User } from '../users/users.entity';
import { BankRepresentative } from '../bank-representative/bank-representative.entity';
export declare class Branch {
    branch_id: string;
    branch_name: string;
    address: string;
    branch_province: string;
    interest_rate: number;
    bank_number: string;
    branch_fax: string;
    phone_number_main: string;
    phone_number_sub: string;
    fax: string;
    deleted_at: string;
    created_at: string;
    updated_at: string;
    created_user: User;
    users: User[];
    created_username: string;
    created_fullname: string;
    bankRepresentatives: BankRepresentative[];
    constructor(branch_id: string);
}
