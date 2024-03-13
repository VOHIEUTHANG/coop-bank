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
import { AffiliateUnitService } from './affiliate-unit.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateAffilicateUnitDto } from './dto/create-affiliate-unit.dto';
import { FilterAffilicateUnitDto } from './dto/filter-affiliate-unit.dto';
import { UpdateAffilicateUnitDto } from './dto/update-affiliate-unit.dto';
import { ExportFormAffilateUnitDto } from './dto/export-form.dto';
import { EXPORT_TYPE } from './affiliate-unit.constant';

@ApiTags('Affiliate Unit')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('affiliate-unit')
@ApiBearerAuth()
export class AffiliateUnitController {
  constructor(private service: AffiliateUnitService) {}

  @Post()
  create(@Body() createData: CreateAffilicateUnitDto, @Request() request) {
    return this.service.create(createData, request.user.sub);
  }

  @Get()
  getList(@Query() filter: FilterAffilicateUnitDto) {
    return this.service.find(filter);
  }

  @Get('options')
  getOptions() {
    return this.service.getOptions();
  }

  @Get('export-form/:id')
  async exportForm(
    @Param('id') affilateUnitId: string,
    @Query(ValidationPipe) query: ExportFormAffilateUnitDto,
    @Response() response,
    @Request() request
  ) {
    let wordBuffer: any;
    switch (query.export_type) {
      case EXPORT_TYPE.AFFILATE_CONTRACT:
        wordBuffer = await this.service.exportAffilateContract(
          affilateUnitId,
          request.user.sub,
          query
        );
        break;
      case EXPORT_TYPE.SERVICE_CONTRACT:
        wordBuffer = await this.service.exportServicentract(
          affilateUnitId,
          request.user.sub,
          query
        );
        break;
      case EXPORT_TYPE.ASSIGN_PAY:
        wordBuffer = await this.service.exportAssignPay(affilateUnitId, request.user.sub, query);
        break;
      case EXPORT_TYPE.PERIODICAL_CHECK:
        wordBuffer = await this.service.exportPeriodicalCheck(
          affilateUnitId,
          request.user.sub,
          query
        );
        break;
    }
    response.send(wordBuffer);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch()
  update(@Body() updateData: UpdateAffilicateUnitDto) {
    return this.service.update(updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
