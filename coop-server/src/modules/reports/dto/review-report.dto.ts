import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class ReviewReportDto {
  @ApiProperty({ default: true })
  @IsBoolean()
  review_status: boolean;
}
