import {
  BadRequestException,
  Injectable,
  NotAcceptableException,
  UnauthorizedException
} from '@nestjs/common';
import PasswordHelper from 'src/helper/hash-password.helper';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/users.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Branch } from '../branch/branch.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(User) private repo: Repository<User>
  ) {}
  async signup(userData: CreateUserDto) {
    const existedUser = await this.repo.findOneBy({ username: userData.username });
    if (existedUser) {
      throw new BadRequestException('Tên đăng nhập đã được sử dụng');
    }

    const existedSameEmail = await this.repo.findOneBy({ email: userData.email });
    if (existedSameEmail) {
      throw new BadRequestException('Email đã được sử dụng');
    }

    const hashPassword = PasswordHelper.hashPassword(userData.password);
    userData.password = hashPassword;

    if (userData.branch_id) {
      const branch = new Branch(userData.branch_id);
      userData.branch = branch;
    }

    const user = await this.userService.create(userData);
    return user;
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneByUsername(username);
    if (user && !user.is_active) {
      throw new NotAcceptableException('Người dùng đã bị khóa');
    }
    const isMatchPassword = PasswordHelper.comparePassword(password, user.password);
    if (!isMatchPassword) {
      throw new UnauthorizedException('Nhập sai mật khẩu !');
    }
    return user;
  }

  async getDetailUser(username: string) {
    return this.userService.findOneByUsername(username);
  }

  async getToken(user: User) {
    const payload = {
      sub: user.user_id,
      username: user.username,
      is_admin: user.is_admin,
      interest_rate: user.branch.interest_rate
    };

    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: 60 * 60 * 6 // 6 hours
      }),
      refresh_token: this.jwtService.sign(payload, {
        expiresIn: 60 * 60 * 24 * 3 // 3 days
      })
    };
  }
}
