import { PartialType } from '@nestjs/swagger';
import { CreateBranchDto } from './create-branch.dto';
import { IsString } from 'class-validator';

export class UpdateBranchDto extends PartialType(CreateBranchDto) {
  @IsString()
  branch_id: string;
}
