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
import { RepresentativeService } from './representative.service';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterRepresentativeDto } from './dto/filter-representative.dto';
import { CurrentUserInterceptor } from '../users/interceptors/current-user.interceptor';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from '../users/users.entity';

@ApiTags('Representative')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('representative')
@ApiBearerAuth()
export class RepresentativeController {
  constructor(private service: RepresentativeService) {}

  @Post()
  create(@Body() createData: CreateRepresentativeDto, @Request() request) {
    return this.service.create(createData, request.user.sub);
  }

  @UseInterceptors(CurrentUserInterceptor)
  @Get()
  getList(@Query() filter: FilterRepresentativeDto, @CurrentUser() currentUser: User) {
    return this.service.find(filter, currentUser);
  }

  @UseInterceptors(CurrentUserInterceptor)
  @Get('export-excel')
  async exportExcel(
    @Response() res,
    @Query() filter: FilterRepresentativeDto,
    @CurrentUser() currentUser: User
  ) {
    const wb = await this.service.exportExcel(filter, currentUser);
    wb.write('gift.xlsx', res);
  }

  @Get(':representative_id')
  getById(@Param('representative_id') representative_id: string) {
    return this.service.findOne(representative_id);
  }

  @Patch()
  update(@Body() updateData: UpdateRepresentativeDto) {
    return this.service.update(updateData);
  }

  @Delete(':representative_id')
  delete(@Param('representative_id') representative_id: string) {
    return this.service.delete(representative_id);
  }
}
