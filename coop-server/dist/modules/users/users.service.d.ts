import { DataSource, Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
export declare class UsersService {
    private repo;
    private dataSource;
    constructor(repo: Repository<User>, dataSource: DataSource);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOneByUsername(username: string): Promise<User>;
    findOneBy(condition: Partial<User>): Promise<User>;
    find(filter: FilterUserDto): Promise<PageDto<User>>;
    update(updateData: UpdateUserDto): Promise<User>;
    updatePassword(updateData: ChangePasswordDto, userId: number): Promise<User>;
    lock(userId: number): Promise<User>;
    getOptions(): Promise<any[]>;
    demoTransaction(): Promise<void>;
}
