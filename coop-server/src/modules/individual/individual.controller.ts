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
  Response,
  ValidationPipe
} from '@nestjs/common';
import { IndividualService } from './individual.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateIndividualDto } from './dto/create-individual.dto';
import { FilterIndividualDto } from './dto/filter-individual.dto';
import { UpdateIndividualDto } from './dto/update-individual.dto';
import { ExportFormIndividualDto } from './dto/export-form.dto';
import { EXPORT_TYPE } from './individual.constant';

@ApiTags('Individual')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('individual')
@ApiBearerAuth()
export class IndividualController {
  constructor(private service: IndividualService) {}

  @Post()
  create(@Body() createData: CreateIndividualDto, @Request() request) {
    return this.service.createOrUpdate(createData, request.user.sub);
  }

  @Get()
  getList(@Query() filter: FilterIndividualDto) {
    return this.service.find(filter);
  }

  @Get('options')
  getOptions() {
    return this.service.getOptions();
  }

  @Get(':id')
  getById(@Param('id') id: string, @Request() request) {
    return this.service.findOne(id, request.user);
  }

  @Patch()
  update(@Body() updateData: UpdateIndividualDto) {
    return this.service.createOrUpdate(updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
