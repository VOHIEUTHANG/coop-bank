import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { IsPhoneNumber } from 'src/common/validation';
import { BankRepresentative } from 'src/modules/bank-representative/bank-representative.entity';
import { User } from 'src/modules/users/users.entity';

export class CreateBranchDto {
  @IsOptional()
  branch_id: string;
  @ApiProperty()
  @IsString()
  branch_name: string;
  @ApiProperty()
  @IsString()
  address: string;
  @ApiProperty()
  @IsNumber()
  @Min(0)
  @Max(100)
  interest_rate: number;
  @ApiProperty()
  @IsString()
  bank_number: string;
  @ApiProperty()
  @IsString()
  branch_province: string;
  @ApiProperty()
  @IsPhoneNumber()
  phone_number_main: string;
  @ApiProperty()
  @IsPhoneNumber()
  @IsOptional()
  phone_number_sub: string;
  @IsOptional()
  created_user: User;
  @IsOptional()
  @IsArray()
  bankRepresentatives: BankRepresentative[];
}
