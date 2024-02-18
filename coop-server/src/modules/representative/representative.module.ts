import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Representative } from './representative.entity';
import { RepresentativeController } from './representative.controller';
import { RepresentativeService } from './representative.service';
import { FileService } from 'src/helper/file.helper';

@Module({
  imports: [TypeOrmModule.forFeature([Representative]), UsersModule],
  controllers: [RepresentativeController],
  providers: [RepresentativeService, FileService],
  exports: [RepresentativeService]
})
export class RepresentativeModule {}
