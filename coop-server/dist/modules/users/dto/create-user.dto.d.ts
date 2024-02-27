import { Branch } from 'src/modules/branch/branch.entity';
import { TransactionRoom } from 'src/modules/transaction-room/transaction-room.entity';
export declare class CreateUserDto {
    username: string;
    password: string;
    email: string;
    phone_number: string;
    full_name: string;
    is_admin: boolean;
    is_active: boolean;
    branch_id: string;
    branch: Branch;
    transaction_room_id: string;
    transaction_room: TransactionRoom;
}
