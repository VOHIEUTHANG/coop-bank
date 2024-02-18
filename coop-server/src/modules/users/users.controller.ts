import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
  Request
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterUserDto } from './dto/filter-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@ApiTags('User')
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth()
@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getList(@Query() filter: FilterUserDto) {
    return this.usersService.find(filter);
  }

  @Get('options')
  getOptions() {
    return this.usersService.getOptions();
  }

  @Get(':userId')
  getById(@Param('userId') userId: number) {
    return this.usersService.findOneBy({ user_id: userId });
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @Patch('change-password')
  chnagePassword(@Body() changePasswordData: ChangePasswordDto, @Request() req) {
    return this.usersService.updatePassword(changePasswordData, req.user?.sub);
  }

  @Delete(':userId')
  lockUser(@Param('userId') userId: number) {
    return this.usersService.lock(userId);
  }
}
