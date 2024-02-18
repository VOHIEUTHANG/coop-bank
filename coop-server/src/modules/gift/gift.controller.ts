import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
  Request,
  Response
} from '@nestjs/common';
import { GiftService } from './gift.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterGiftDto } from './dto/filter-gift.dto';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';

@ApiTags('Gift')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('gift')
@ApiBearerAuth()
export class GiftController {
  constructor(private service: GiftService) {}

  @Post()
  create(@Body() createData: CreateGiftDto, @Request() request) {
    return this.service.createOrUpdate(createData, request.user.sub);
  }

  @Get()
  getList(@Query() filter: FilterGiftDto) {
    return this.service.find(filter);
  }

  @Get('export-excel')
  async exportExcel(@Response() res) {
    const wb = await this.service.exportExcel();
    wb.write('gift.xlsx', res);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch()
  update(@Body() updateData: UpdateGiftDto) {
    return this.service.createOrUpdate(updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
