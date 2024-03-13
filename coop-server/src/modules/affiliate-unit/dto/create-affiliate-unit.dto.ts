import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { IsDateFormat } from 'src/common/validation';
import { Representative } from 'src/modules/representative/representative.entity';
import { User } from 'src/modules/users/users.entity';
import { AffiliateUnitFile } from '../entity/affiliate-unit-file.entity';

export class CreateAffilicateUnitDto {
  @IsOptional()
  affiliate_unit_id: string;

  @ApiProperty()
  @IsString()
  affiliate_unit_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_code: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_level: string;

  @ApiPropertyOptional()
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsOptional()
  affiliate_unit_email: string;

  @ApiProperty()
  @IsString()
  affiliate_unit_address: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  paid_date: number;

  @ApiProperty()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  affiliate_unit_phone: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_fax: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_image_1: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_image_2: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_image_3: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_image_4: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_paycheck: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  founding_date: string;

  @IsOptional()
  created_user: User;

  @IsOptional()
  representatives: Representative[];

  @IsOptional()
  affiliate_unit_files: AffiliateUnitFile[];
}
