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
import { CurrentUserInterceptor } from '../users/interceptors/current-user.interceptor';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from '../users/users.entity';

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

  @UseInterceptors(CurrentUserInterceptor)
  @Get()
  getList(@Query() filter: FilterGiftDto, @CurrentUser() currentUser: User) {
    return this.service.find(filter, currentUser);
  }

  @UseInterceptors(CurrentUserInterceptor)
  @Get('export-excel')
  async exportExcel(
    @Response() res,
    @Query() filter: FilterGiftDto,
    @CurrentUser() currentUser: User
  ) {
    const wb = await this.service.exportExcel(filter, currentUser);
    wb.write('gift.xlsx', res);
  }

  @Get('export-form/:id')
  async exportForm(@Param('id') giftId: string, @Response() response, @Request() request) {
    const wordBuffer = await this.service.exportProposedForm(giftId);
    response.send(wordBuffer);
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
