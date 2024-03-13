import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { BankRepresentative } from './bank-representative.entity';
import { BankRepresentativeController } from './bank-representative.controller';
import { BankRepresentativeService } from './bank-representative.service';

@Module({
  imports: [TypeOrmModule.forFeature([BankRepresentative]), UsersModule],
  controllers: [BankRepresentativeController],
  providers: [BankRepresentativeService],
  exports: [BankRepresentativeService]
})
export class BankRepresentativeModule {}
