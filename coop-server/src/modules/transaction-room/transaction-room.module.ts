import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { TransactionRoom } from './transaction-room.entity';
import { TransactionRoomController } from './transaction-room.controller';
import { TransactionRoomService } from './transaction-room.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionRoom]), UsersModule],
  controllers: [TransactionRoomController],
  providers: [TransactionRoomService]
})
export class TransactionRoomModule {}
