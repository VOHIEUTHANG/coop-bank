import { PartialType } from '@nestjs/swagger';
import { CreateIndividualDto } from './create-individual.dto';
import { IsString } from 'class-validator';

export class UpdateIndividualDto extends PartialType(CreateIndividualDto) {
  @IsString()
  individual_id: string;
}
