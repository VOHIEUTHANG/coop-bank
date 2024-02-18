import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { IsDateFormat } from 'src/common/validation';
import { User } from 'src/modules/users/users.entity';
import { Gender } from 'src/types/data-type';

export class CreateBankRepresentativeDto {
  @IsOptional()
  bank_representative_id: string;

  @ApiProperty()
  @IsString()
  bank_representative_name: string;

  @ApiPropertyOptional()
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsOptional()
  bank_representative_email: string;

  @ApiProperty()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  phone_number: string;

  @ApiProperty()
  @IsNumber()
  bank_representative_position: number;

  @ApiPropertyOptional()
  @IsEnum(Gender, { message: 'Giới tính phải là giá trị Nam hoặc Nữ' })
  gender: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  birth_date: string;

  @ApiProperty()
  @IsString()
  id_number: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  id_issued_by: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  id_issued_date: string;

  @IsOptional()
  created_user: User;
}
