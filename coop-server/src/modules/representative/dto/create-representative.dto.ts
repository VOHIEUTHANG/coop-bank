import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { IsDateFormat } from 'src/common/validation';
import { User } from 'src/modules/users/users.entity';
import { Gender } from 'src/types/data-type';

export class CreateRepresentativeDto {
  @IsOptional()
  representative_id: string;

  @ApiProperty()
  @IsString()
  representative_name: string;

  @ApiPropertyOptional()
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsOptional()
  representative_email: string;

  @ApiProperty()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  phone_number: string;

  @ApiProperty()
  @IsString()
  representative_position: string;

  @ApiPropertyOptional()
  @IsEnum(Gender)
  @IsOptional()
  gender: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  bank_number: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  bank_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  tax_code: string;

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
  id_front_image: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  id_back_image: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  id_issued_by: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  id_issued_date: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  decision_number: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  decision_date: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  effective_date_from: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  effective_date_to: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  decision_district: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  decider_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  decider_position: string;

  @IsOptional()
  created_user: User;
}
