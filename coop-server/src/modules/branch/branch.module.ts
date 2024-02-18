import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { BranchController } from './branch.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Branch } from './branch.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Branch]), UsersModule],
  controllers: [BranchController],
  providers: [BranchService]
})
export class BranchModule {}
