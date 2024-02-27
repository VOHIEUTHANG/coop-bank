import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsPhoneNumber, IsString, Max, Min } from 'class-validator';
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
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  branch_fax: string;
  @ApiProperty()
  @IsString()
  branch_province: string;
  @ApiProperty()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  phone_number_main: string;
  @ApiProperty()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  @IsOptional()
  phone_number_sub: string;
  @IsOptional()
  created_user: User;
  @IsOptional()
  @IsArray()
  bankRepresentatives: BankRepresentative[];
}
