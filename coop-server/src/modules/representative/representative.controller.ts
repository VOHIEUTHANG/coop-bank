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
  Request
} from '@nestjs/common';
import { RepresentativeService } from './representative.service';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterRepresentativeDto } from './dto/filter-representative.dto';

@ApiTags('Representative')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('representative')
@ApiBearerAuth()
export class RepresentativeController {
  constructor(private representativeService: RepresentativeService) {}

  @Post()
  create(@Body() createData: CreateRepresentativeDto, @Request() request) {
    return this.representativeService.create(createData, request.user.sub);
  }

  @Get()
  getList(@Query() filter: FilterRepresentativeDto) {
    return this.representativeService.find(filter);
  }

  @Get(':representative_id')
  getById(@Param('representative_id') representative_id: string) {
    return this.representativeService.findOne(representative_id);
  }

  @Patch()
  update(@Body() updateData: UpdateRepresentativeDto) {
    return this.representativeService.update(updateData);
  }

  @Delete(':representative_id')
  delete(@Param('representative_id') representative_id: string) {
    return this.representativeService.delete(representative_id);
  }
}