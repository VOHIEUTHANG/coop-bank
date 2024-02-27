import { BankRepresentative } from 'src/modules/bank-representative/bank-representative.entity';
import { User } from 'src/modules/users/users.entity';
export declare class CreateBranchDto {
    branch_id: string;
    branch_name: string;
    address: string;
    interest_rate: number;
    bank_number: string;
    branch_fax: string;
    branch_province: string;
    phone_number_main: string;
    phone_number_sub: string;
    created_user: User;
    bankRepresentatives: BankRepresentative[];
}
