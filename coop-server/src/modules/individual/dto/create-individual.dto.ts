import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsOptional, IsPhoneNumber, IsString, IsNumber, IsInt } from 'class-validator';
import { IsDateFormat } from 'src/common/validation';
import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';
import { User } from 'src/modules/users/users.entity';
import { Gender } from 'src/types/data-type';
import { IndividualFile } from '../entity/individual-file.entity';

export class CreateIndividualDto {
  @IsOptional()
  individual_id: string;

  @ApiProperty()
  @IsString()
  individual_fullname: string;

  @ApiProperty()
  @IsString()
  individual_position: string;

  @ApiProperty()
  @IsString()
  individual_code: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  individual_cic: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  individual_cic_rank: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  individual_cic_score: number;

  @ApiProperty()
  @IsString()
  individual_bank_number: string;

  @ApiProperty()
  @IsInt()
  total_income: number;

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

  @IsOptional()
  created_user: User;

  @IsOptional()
  @IsString()
  affiliate_unit_id: string;

  @IsOptional()
  affiliate_unit: AffiliateUnit;

  @IsOptional()
  individual_files: IndividualFile[];

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  heir_full_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  heir_id_number: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  heir_birth_date: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  heir_address: string;

  @ApiPropertyOptional()
  @IsPhoneNumber('VN', { message: 'Số điện thoại không đúng định dạng' })
  @IsOptional()
  heir_phone: string;
}
