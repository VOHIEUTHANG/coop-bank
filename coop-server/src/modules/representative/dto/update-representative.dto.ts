import { PartialType } from '@nestjs/swagger';
import { CreateRepresentativeDto } from './create-representative.dto';
import { IsString } from 'class-validator';

export class UpdateRepresentativeDto extends PartialType(CreateRepresentativeDto) {
  @IsString()
  representative_id: string;
}
