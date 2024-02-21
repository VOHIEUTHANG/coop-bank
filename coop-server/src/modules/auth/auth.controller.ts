import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  NotFoundException,
  Post,
  Request,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/public-route.decorator';
import { SigninUserDto } from '../users/dto/signin-user.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@ApiTags('Auth')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('auth')
@ApiBearerAuth()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Body() data: SigninUserDto, @Request() req) {
    return this.authService.getToken(req.user);
  }

  @Public()
  @Post('signup')
  async signup(@Body() userData: CreateUserDto) {
    const user = await this.authService.signup(userData);
    return user;
  }

  @Get('refresh-token')
  async refreshToken(@Request() req: any) {
    const newToken = await this.authService.getToken(req.user);
    return newToken;
  }

  @Get('profile')
  getProfile(@Request() req: any) {
    if (!req?.user?.username) {
      throw new NotFoundException();
    }
    return this.authService.getDetailUser(req.user.username);
  }
}
