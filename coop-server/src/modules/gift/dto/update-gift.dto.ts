import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateGiftDto } from './create-gift.dto';

export class UpdateGiftDto extends PartialType(CreateGiftDto) {
  @IsString()
  gift_id: string;
}
