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
import { IndividualService } from './individual.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateIndividualDto } from './dto/create-individual.dto';
import { FilterIndividualDto } from './dto/filter-individual.dto';
import { UpdateIndividualDto } from './dto/update-individual.dto';

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

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findOne(id);
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
