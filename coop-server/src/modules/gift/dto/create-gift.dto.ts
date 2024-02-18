import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { IsDateFormat } from 'src/common/validation';
import { AffiliateUnit } from 'src/modules/affiliate-unit/entity/affiliate-unit.entity';
import { User } from 'src/modules/users/users.entity';

export class CreateGiftDto {
  @IsOptional()
  gift_id: string;

  @ApiProperty()
  @IsString()
  gift_content: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  gift_description: string;

  @ApiPropertyOptional()
  @IsDateFormat()
  @IsOptional()
  gift_date: string;

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
  @IsString()
  @IsOptional()
  affiliate_unit_id: string;
}
