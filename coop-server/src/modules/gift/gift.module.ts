import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { FileService } from 'src/helper/file.helper';
import { Gift } from './entity/gift.entity';
import { GiftController } from './gift.controller';
import { GiftService } from './gift.service';

@Module({
  imports: [TypeOrmModule.forFeature([Gift]), UsersModule],
  controllers: [GiftController],
  providers: [GiftService, FileService]
})
export class GiftModule {}
