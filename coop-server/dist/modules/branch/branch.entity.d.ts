import { User } from '../users/users.entity';
import { BankRepresentative } from '../bank-representative/bank-representative.entity';
import { TransactionRoom } from '../transaction-room/transaction-room.entity';
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
    deleted_at: string;
    created_at: string;
    updated_at: string;
    created_user: User;
    users: User[];
    created_username: string;
    created_fullname: string;
    bankRepresentatives: BankRepresentative[];
    transaction_rooms: TransactionRoom[];
    constructor(branch_id: string);
}
