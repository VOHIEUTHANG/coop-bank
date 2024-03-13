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
import { ContractService } from './contract.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateContractDto } from './dto/create-contract.dto';
import { FilterContractDto } from './dto/filter-contract.dto';
import { UpdateContractDto } from './dto/update-contract.dto';
import { ExportFormIndividualDto } from './dto/export-form.dto';
import { EXPORT_TYPE } from './contract.constant';

@ApiTags('Contract')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('contract')
@ApiBearerAuth()
export class ContractController {
  constructor(private service: ContractService) {}

  @Post()
  create(@Body() createData: CreateContractDto, @Request() request) {
    return this.service.createOrUpdate(createData, request.user.sub);
  }

  @Get()
  getList(@Query() filter: FilterContractDto) {
    return this.service.find(filter);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch()
  update(@Body() updateData: UpdateContractDto) {
    return this.service.createOrUpdate(updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Get('export-form/:id')
  async exportForm(
    @Param('id') contractId: string,
    @Query(ValidationPipe) query: ExportFormIndividualDto,
    @Response() response,
    @Request() request
  ) {
    let wordBuffer: any;
    switch (query.export_type) {
      case EXPORT_TYPE.APPRAISAL_REPORT:
        wordBuffer = await this.service.exportAppraisalReport(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.BANK_RECEIPT:
        wordBuffer = await this.service.exportBankReceipt(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.CASH_RECEIPT:
        wordBuffer = await this.service.exportCashReceipt(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.CUSTOMER_SURVEY_FORM:
        wordBuffer = await this.service.exportCustomerServey(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.CONTRACT:
        wordBuffer = await this.service.exportContract(
          contractId,
          request.user.sub,
          query.bank_representative_id
        );
        break;
      case EXPORT_TYPE.DEBIT_RECEIPT:
        wordBuffer = await this.service.exportDebitReceipt(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.ACCOUNT_OPENING:
        wordBuffer = await this.service.exportAccountOpening(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.DIGITAL_CONTRACT:
        wordBuffer = await this.service.exportDigitalContract(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.AUTHORIZATION_FORM:
        wordBuffer = await this.service.exportAuthorizationForm(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.SERVICE_REGISTRATION:
        wordBuffer = await this.service.exportServiceRegistration(contractId, request.user.sub);
        break;
      case EXPORT_TYPE.CAPITAL_INSPECTOIN:
        wordBuffer = await this.service.exportCapitalInspection(contractId, request.user.sub);
        break;
    }
    response.send(wordBuffer);
  }
}
