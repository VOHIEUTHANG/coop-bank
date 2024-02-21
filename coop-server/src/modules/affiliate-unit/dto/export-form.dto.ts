import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt } from 'class-validator';

export class ExportFormAffilateUnitDto {
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  @IsInt()
  export_type: number;
}
