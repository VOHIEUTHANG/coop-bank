import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateContractDto } from './create-contract.dto';
import { IsString } from 'class-validator';

export class UpdateContractDto extends PartialType(CreateContractDto) {
  @ApiProperty()
  @IsString()
  contract_id: string;
}
