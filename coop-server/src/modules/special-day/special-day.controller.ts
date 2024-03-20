import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
  Response
} from '@nestjs/common';
import { SpecialDayService } from './special-day.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CurrentUserInterceptor } from '../users/interceptors/current-user.interceptor';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from '../users/users.entity';

@ApiTags('Special Day')
@UseInterceptors(ClassSerializerInterceptor)
@UseInterceptors(CurrentUserInterceptor)
@ApiBearerAuth()
@Controller('special-day')
export class SpecialDayController {
  constructor(private readonly service: SpecialDayService) {}

  @Get()
  getList(@CurrentUser() currentUser: User) {
    return this.service.getList(currentUser);
  }

  @Get('notify')
  getListNotify(@CurrentUser() currentUser: User) {
    return this.service.getListNotify(currentUser);
  }

  @Get('notify-count')
  getListNotifyCount(@CurrentUser() currentUser: User) {
    return this.service.getNotifyCount(currentUser);
  }

  @Get('export-excel')
  async exportExcel(@Response() res, @CurrentUser() currentUser: User) {
    const wb = await this.service.exportExcel(currentUser);
    wb.write('gift.xlsx', res);
  }
}
