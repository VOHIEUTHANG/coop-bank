import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, IsPhoneNumber, IsString } from 'class-validator';
import { IsDateFormat } from 'src/common/validation';
import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';
import { User } from 'src/modules/users/users.entity';
import { Gender } from 'src/types/data-type';

export class CreateIndividualDto {
  @IsOptional()
  individual_id: string;

  @ApiProperty()
  @IsString()
  individual_fullname: string;

  @ApiProperty()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  phone_number: string;

  @ApiPropertyOptional()
  @IsEnum(Gender)
  @IsOptional()
  gender: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  current_address: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  origin_address: string;

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

  @Transform(({ value }) => {
    return typeof value === 'string' ? value : value && JSON.stringify(value);
  })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  export_data: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  salary_file: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  marriage_file: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  appoint_file: string;

  @IsOptional()
  created_user: User;

  @IsOptional()
  @IsString()
  affiliate_unit_id: string;

  @IsOptional()
  affiliate_unit: AffiliateUnit;
}
