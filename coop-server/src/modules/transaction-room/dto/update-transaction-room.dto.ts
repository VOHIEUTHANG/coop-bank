import { PartialType } from '@nestjs/swagger';
import { CreateTransactionRoomDto } from './create-transaction-room.dto';
import { IsString } from 'class-validator';

export class UpdateTransactionRoomDto extends PartialType(CreateTransactionRoomDto) {
  @IsString()
  transaction_room_id: string;
}
