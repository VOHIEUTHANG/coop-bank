import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { FileService } from 'src/helper/file.helper';
import { Document } from './entity/document.entity';
import { DocumentController } from './document.controller';
import { DocumentService } from './document.service';
import { User } from '../users/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Document, User]), UsersModule],
  controllers: [DocumentController],
  providers: [DocumentService, FileService],
  exports: [DocumentService]
})
export class DocumentModule {}
