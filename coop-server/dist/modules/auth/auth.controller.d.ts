import { AuthService } from './auth.service';
import { SigninUserDto } from '../users/dto/signin-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(data: SigninUserDto, req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    signup(userData: CreateUserDto): Promise<import("../users/users.entity").User>;
    refreshToken(req: any): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    getProfile(req: any): Promise<import("../users/users.entity").User>;
}
