import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { BankRepresentative } from 'src/modules/bank-representative/bank-representative.entity';
import { User } from 'src/modules/users/users.entity';

export class CreateBranchDto {
  @IsOptional()
  branch_id: string;
  @IsNotEmpty()
  @ApiProperty()
  branch_name: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;
  @ApiProperty()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  phone_number_main: string;
  @ApiProperty()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  @IsOptional()
  phone_number_sub: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  fax: string;
  @IsOptional()
  created_user: User;
  @IsOptional()
  @IsArray()
  bankRepresentatives: BankRepresentative[];
}
