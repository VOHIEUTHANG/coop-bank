import { PartialType } from '@nestjs/swagger';
import { CreateBankRepresentativeDto } from './create-bank-representative.dto';
import { IsString } from 'class-validator';

export class UpdateBankRepresentativeDto extends PartialType(CreateBankRepresentativeDto) {
  @IsString()
  bank_representative_id: string;
}
