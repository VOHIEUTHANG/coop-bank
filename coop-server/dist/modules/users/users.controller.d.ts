import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getList(filter: FilterUserDto): Promise<import("../../common/dto/page.dto").PageDto<import("./users.entity").User>>;
    getOptions(): Promise<any[]>;
    getById(userId: number): Promise<import("./users.entity").User>;
    update(updateUserDto: UpdateUserDto): Promise<import("./users.entity").User>;
    chnagePassword(changePasswordData: ChangePasswordDto, req: any): Promise<import("./users.entity").User>;
    lockUser(userId: number): Promise<import("./users.entity").User>;
}
