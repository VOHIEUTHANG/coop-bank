import { Branch } from '../branch/branch.entity';
import { TransactionRoom } from '../transaction-room/transaction-room.entity';
export declare class User {
    user_id: number;
    username: string;
    email: string;
    phone_number: string;
    full_name: string;
    password: string;
    is_admin: boolean;
    is_active: boolean;
    deleted_at: string;
    created_at: string;
    updated_at: string;
    branch: Branch;
    branch_id: string;
    branch_name: string;
    transaction_room: TransactionRoom;
    transaction_room_id: string;
    transaction_room_name: string;
    constructor(user_id: number);
}
