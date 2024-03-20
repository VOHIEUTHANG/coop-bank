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
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TransactionRoomService } from './transaction-room.service';
import { UpdateTransactionRoomDto } from './dto/update-transaction-room.dto';
import { CreateTransactionRoomDto } from './dto/create-transaction-room.dto';
import { FilterTransactionRoomDto } from './dto/filter-transaction-room.dto';

@ApiTags('Transaction room')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('transaction-room')
@ApiBearerAuth()
export class TransactionRoomController {
  constructor(private service: TransactionRoomService) {}

  @Post()
  create(@Body() transactionRoom: CreateTransactionRoomDto, @Request() request) {
    return this.service.create(transactionRoom, request.user.sub);
  }

  @Get()
  getList(@Query() filter: FilterTransactionRoomDto) {
    return this.service.find(filter);
  }

  @Get('options')
  getOptions(@Query('branch_id') branchId?: string) {
    return this.service.getOptions(branchId);
  }

  @Get(':transaction_room_id')
  getById(@Param('transaction_room_id') transaction_room_id: string) {
    return this.service.findOne(transaction_room_id);
  }

  @Patch()
  update(@Body() updateData: UpdateTransactionRoomDto) {
    return this.service.update(updateData);
  }

  @Delete(':transaction_room_id')
  delete(@Param('transaction_room_id') transaction_room_id: string) {
    return this.service.delete(transaction_room_id);
  }
}
