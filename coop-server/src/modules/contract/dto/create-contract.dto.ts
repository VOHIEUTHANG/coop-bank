import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsPositive, IsInt } from 'class-validator';
import { IsDateFormat } from 'src/common/validation';
import { Individual } from 'src/modules/individual/entity/individual.entity';
import { User } from 'src/modules/users/users.entity';

export class CreateContractDto {
  @ApiProperty()
  @IsString()
  contract_number: string;

  @ApiProperty()
  @IsString()
  loan_purpose: string;

  @ApiProperty()
  @IsString()
  loan_bank_number: string;

  @ApiProperty()
  @IsInt()
  is_qualified: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  total_money: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  loan_money: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  total_income: number;

  @ApiProperty()
  @IsNumber()
  interest_rate: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  month_count: number;

  @ApiProperty()
  @IsPositive()
  @IsInt()
  period_count: number;

  @ApiProperty()
  @IsDateFormat()
  contract_date: string;

  @ApiProperty()
  @IsDateFormat()
  start_date: string;

  @ApiProperty()
  @IsDateFormat()
  end_date: string;

  @ApiProperty()
  @IsDateFormat()
  first_pay_date: string;

  @IsOptional()
  individual: Individual;

  @IsOptional()
  created_user: User;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  individual_id: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  individual_bank_number: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  individual_cic: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  individual_cic_rank: string;

  @ApiPropertyOptional()
  @IsInt()
  @IsOptional()
  individual_cic_score: number;

  @ApiProperty()
  @IsInt()
  declared_total_income: number;

  @ApiProperty()
  @IsInt()
  estimated_total_income: number;

  @ApiProperty()
  @IsInt()
  paid_date: number;
}
