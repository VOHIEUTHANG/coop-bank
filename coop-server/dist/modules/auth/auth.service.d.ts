import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userService;
    private jwtService;
    private repo;
    constructor(userService: UsersService, jwtService: JwtService, repo: Repository<User>);
    signup(userData: CreateUserDto): Promise<User>;
    validateUser(username: string, password: string): Promise<User>;
    getDetailUser(username: string): Promise<User>;
    getToken(user: User): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
