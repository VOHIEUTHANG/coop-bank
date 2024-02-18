import { PartialType } from '@nestjs/swagger';
import { CreateAffilicateUnitDto } from './create-affiliate-unit.dto';
import { IsString } from 'class-validator';

export class UpdateAffilicateUnitDto extends PartialType(CreateAffilicateUnitDto) {
  @IsString()
  affiliate_unit_id: string;
}
