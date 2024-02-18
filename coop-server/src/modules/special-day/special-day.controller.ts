import {
  Controller,
  Get,
  UseInterceptors,
  ClassSerializerInterceptor,
  Response
} from '@nestjs/common';
import { SpecialDayService } from './special-day.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Special Day')
@UseInterceptors(ClassSerializerInterceptor)
@ApiBearerAuth()
@Controller('special-day')
export class SpecialDayController {
  constructor(private readonly service: SpecialDayService) {}

  @Get()
  getList() {
    return this.service.getList();
  }

  @Get('notify')
  getListNotify() {
    return this.service.getListNotify();
  }

  @Get('notify-count')
  getListNotifyCount() {
    return this.service.getNotifyCount();
  }

  @Get('export-excel')
  async exportExcel(@Response() res) {
    const wb = await this.service.exportExcel();
    wb.write('gift.xlsx', res);
  }
}
