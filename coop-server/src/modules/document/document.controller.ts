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
import { DocumentService } from './document.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateDocumentDto } from './dto/create-document.dto';
import { FilterDocumentDto } from './dto/filter-document-unit.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { CurrentUserInterceptor } from '../users/interceptors/current-user.interceptor';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from '../users/users.entity';

@ApiTags('Document')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('document')
@ApiBearerAuth()
export class DocumentController {
  constructor(private service: DocumentService) {}

  @Post()
  create(@Body() createData: CreateDocumentDto, @Request() request) {
    return this.service.create(createData, request.user.sub);
  }

  // @UseInterceptors(CurrentUserInterceptor)
  @Get()
  getList(@Query() filter: FilterDocumentDto) {
    return this.service.find(filter);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch()
  update(@Body() updateData: UpdateDocumentDto) {
    return this.service.update(updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
