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
import { BankRepresentativeService } from './bank-representative.service';
import { UpdateBankRepresentativeDto } from './dto/update-bank-representative.dto';
import { CreateBankRepresentativeDto } from './dto/create-bank-representative.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterBankRepresentativeDto } from './dto/filter-bank-representative.dto';

@ApiTags('Bank Representative')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('bank-representative')
@ApiBearerAuth()
export class BankRepresentativeController {
  constructor(private bankRepresentativeService: BankRepresentativeService) {}

  @Post()
  create(@Body() createData: CreateBankRepresentativeDto, @Request() request) {
    return this.bankRepresentativeService.create(createData, request.user.sub);
  }

  @Get()
  getList(@Query() filter: FilterBankRepresentativeDto) {
    return this.bankRepresentativeService.find(filter);
  }

  @Get('list-by-user')
  getListByUser(@Request() request) {
    return this.bankRepresentativeService.getListByUser(request.user.sub);
  }

  @Get(':bank_representative_id')
  getById(@Param('bank_representative_id') bank_representative_id: string) {
    return this.bankRepresentativeService.findOne(bank_representative_id);
  }

  @Patch()
  update(@Body() updateData: UpdateBankRepresentativeDto) {
    return this.bankRepresentativeService.update(updateData);
  }

  @Delete(':bank_representative_id')
  delete(@Param('bank_representative_id') bank_representative_id: string) {
    return this.bankRepresentativeService.delete(bank_representative_id);
  }
}
