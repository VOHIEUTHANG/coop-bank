import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class ExportFormAffilateUnitDto {
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  @IsInt()
  export_type: number;
  @ApiProperty()
  @IsString()
  representative_id: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  branch_note: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_note: string;
}
