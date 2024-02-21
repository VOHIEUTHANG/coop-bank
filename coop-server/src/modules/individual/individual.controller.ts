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

  @Get('export-form/:id')
  async exportForm(
    @Param('id') individualId: string,
    @Query(ValidationPipe) query: ExportFormIndividualDto,
    @Response() response,
    @Request() request
  ) {
    // save export data
    await this.service.saveExportData(individualId, query);
    let wordBuffer: any;
    switch (query.export_type) {
      case EXPORT_TYPE.APPRAISAL_REPORT:
        wordBuffer = await this.service.exportAppraisalReport(
          individualId,
          query,
          request.user.sub
        );
        break;
      case EXPORT_TYPE.BANK_RECEIPT:
        wordBuffer = await this.service.exportBankReceipt(individualId, query, request.user.sub);
        break;
      case EXPORT_TYPE.CASH_RECEIPT:
        wordBuffer = await this.service.exportCashReceipt(individualId, query, request.user.sub);
        break;
      case EXPORT_TYPE.CONTRACT_60_50:
        wordBuffer = await this.service.exportContract6050(individualId, query, request.user.sub);
        break;
      case EXPORT_TYPE.CONTRACT_60_60:
        wordBuffer = await this.service.exportContract6060(individualId, query, request.user.sub);
        break;
      case EXPORT_TYPE.DEBIT_RECEIPT:
        wordBuffer = await this.service.exportDebitReceipt(individualId, query, request.user.sub);
        break;
    }
    response.send(wordBuffer);
  }
}
