import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IsDateFormat } from 'src/common/validation';
import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';
import { User } from 'src/modules/users/users.entity';

export class CreateGiftDto {
  @IsOptional()
  gift_id: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  gift_date: string;

  @Transform(({ value }) => {
    return typeof value === 'string' ? value : value && JSON.stringify(value);
  })
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  gifts: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  proposed_date: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  gift_image_1: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  gift_image_2: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  gift_image_3: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  gift_image_4: string;

  @IsOptional()
  created_user: User;

  @IsOptional()
  giver_user: User;

  @IsOptional()
  affiliate_unit: AffiliateUnit;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  giver_user_id: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  proposed_user_id: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  affiliate_unit_id: string;
}
