import { Module } from '@nestjs/common';
import { SpecialDayService } from './special-day.service';
import { SpecialDayController } from './special-day.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Representative } from '../representative/representative.entity';
import { AffiliateUnit } from '../affiliate-unit/entity/affiliate-unit.entity';
import { Individual } from '../individual/entity/individual.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Representative, AffiliateUnit, Individual]), UsersModule],
  controllers: [SpecialDayController],
  providers: [SpecialDayService]
})
export class SpecialDayModule {}
