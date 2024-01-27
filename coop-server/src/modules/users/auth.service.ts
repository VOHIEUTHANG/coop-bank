import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import PasswordHelper from 'src/helper/hash-password.helper';
import { SigninUserDto } from './dto/signin-user.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}
  async signup(userData: CreateUserDto) {
    const existedUser = await this.userService.findOne(userData.username);
    if (existedUser) {
      throw new BadRequestException('Username in use');
    }

    const users = await this.userService.find({ email: userData.email });
    if (users.length) {
      throw new BadRequestException('Email in use');
    }

    const hashPassword = PasswordHelper.hashPassword(userData.password);
    userData.password = hashPassword;

    const user = await this.userService.create(userData);
    return user;
  }

  async signin(userData: SigninUserDto) {
    const [user] = await this.userService.find({ username: userData.username });
    if (!user) {
      throw new NotFoundException('User not found!');
    }
    const isMatchPassword = PasswordHelper.comparePassword(userData.password, user.password);
    if (!isMatchPassword) {
      throw new UnauthorizedException('Wrong password !');
    }
    return user;
  }
}
