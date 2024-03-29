import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { SORT_TYPE } from 'src/constant/pagination.constant';

export class PageOptionsDto {
  @ApiPropertyOptional({ enum: SORT_TYPE, default: SORT_TYPE.DESC })
  @IsEnum(SORT_TYPE)
  @IsOptional()
  readonly order?: SORT_TYPE = SORT_TYPE.DESC;

  @ApiPropertyOptional({
    minimum: 1,
    default: 1
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  @ApiPropertyOptional({
    minimum: 1,
    maximum: 50,
    default: 10
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  limit?: number = 10;

  get skip(): number {
    return (this.page - 1) * this.limit;
  }
}
