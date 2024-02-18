import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { FileService } from 'src/helper/file.helper';
import { AffiliateUnit } from './entity/affiliate-unit.entity';
import { AffiliateUnitController } from './affiliate-unit.controller';
import { AffiliateUnitService } from './affiliate-unit.service';
import { AffiliateUnitFile } from './entity/affiliate-unit-file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AffiliateUnit, AffiliateUnitFile]), UsersModule],
  controllers: [AffiliateUnitController],
  providers: [AffiliateUnitService, FileService]
})
export class AffiliateUnitModule {}
