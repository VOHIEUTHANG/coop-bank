import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { FileService } from 'src/helper/file.helper';
import { Individual } from './entity/individual.entity';
import { IndividualController } from './individual.controller';
import { IndividualService } from './individual.service';

@Module({
  imports: [TypeOrmModule.forFeature([Individual]), UsersModule],
  controllers: [IndividualController],
  providers: [IndividualService, FileService]
})
export class IndividualModule {}
