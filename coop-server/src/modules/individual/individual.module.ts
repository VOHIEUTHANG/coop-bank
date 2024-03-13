import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { FileService } from 'src/helper/file.helper';
import { Individual } from './entity/individual.entity';
import { IndividualFile } from './entity/individual-file.entity';
import { IndividualController } from './individual.controller';
import { IndividualService } from './individual.service';
import { AffiliateUnitModule } from '../affiliate-unit/affiliate-unit.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Individual, IndividualFile]),
    UsersModule,
    AffiliateUnitModule
  ],
  controllers: [IndividualController],
  providers: [IndividualService, FileService]
})
export class IndividualModule {}
