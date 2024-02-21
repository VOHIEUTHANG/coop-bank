import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator';

export class ExportFormIndividualDto {
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  @IsInt()
  export_type: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  loan_purpose: string;

  @Transform(({ value }) => parseInt(value))
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  total_money: number;

  @Transform(({ value }) => parseInt(value))
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  loan_money: number;

  @Transform(({ value }) => parseInt(value))
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  total_income: number;

  @Transform(({ value }) => parseInt(value))
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  interest_rate: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  credit_rating: string;

  @Transform(({ value }) => parseInt(value))
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  is_qualified: number;

  @Transform(({ value }) => parseInt(value))
  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  duration: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  contract_number: string;
}
