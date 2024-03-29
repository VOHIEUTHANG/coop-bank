import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { PageOptionsDto } from 'src/common/dto/page-options.dto';

export class FilterRepresentativeDto extends PageOptionsDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  search: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  created_date_from: string;
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  created_date_to: string;
}
