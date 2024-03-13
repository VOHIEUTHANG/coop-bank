import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class ExportFormIndividualDto {
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  @IsInt()
  export_type: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  bank_representative_id: string;
}
