import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Contract } from './entity/contract.entity';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { AffiliateUnitModule } from '../affiliate-unit/affiliate-unit.module';
import { BankRepresentativeModule } from '../bank-representative/bank-representative.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contract]),
    UsersModule,
    AffiliateUnitModule,
    BankRepresentativeModule
  ],
  controllers: [ContractController],
  providers: [ContractService]
})
export class ContractModule {}
