import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    user_id: number;
}
export {};
