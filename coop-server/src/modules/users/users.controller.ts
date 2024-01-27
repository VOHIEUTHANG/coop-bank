import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
  Session,
  UseInterceptors,
  UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ExposeUserDto } from './dto/expose-user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthService } from './auth.service';
import { SigninUserDto } from './dto/signin-user.dto';
import { User } from './users.entity';
import { CurrentUser } from './decorators/current-user.decorator';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { AuthGuard } from 'src/guards/auth.guard';

@UseInterceptors(CurrentUserInterceptor)
@Serialize(ExposeUserDto)
@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  @UseGuards(AuthGuard)
  @Get('whoami')
  whoami(@CurrentUser() user: User) {
    return user;
  }

  @Post('signout')
  async signout(@Session() session: any) {
    session.username = null;
  }

  @Post('signup')
  async signup(@Body() userData: CreateUserDto, @Session() session: any) {
    const user = await this.authService.signup(userData);
    session.username = user.username;
    return user;
  }

  @Post('signin')
  async signin(@Body() userData: SigninUserDto, @Session() session: any) {
    const user = await this.authService.signin(userData);
    session.username = user.username;
    return user;
  }

  @Get()
  findAll(@Query('email') email: string) {
    return this.usersService.find({ email });
  }

  @Get(':username')
  async findUserByUsername(@Param('username') username: string) {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new NotFoundException('User not found !');
    }
    return user;
  }

  @Patch(':username')
  update(@Param('username') username: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(username, updateUserDto);
  }

  @Delete(':username')
  remove(@Param('username') username: string) {
    return this.usersService.remove(username);
  }
}
