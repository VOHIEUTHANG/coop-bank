import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { PageOptionsDto } from './page-options.dto';

export class PageDto<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly items: T[];
  readonly itemsPerPage: number;
  readonly page: number;
  readonly totalItems: number;
  readonly totalPages: number;
  readonly meta: any;

  constructor(data: T[], pageOptionsDto: PageOptionsDto, itemCount: number, meta?: any) {
    this.items = data;
    this.itemsPerPage = pageOptionsDto.limit;
    this.page = pageOptionsDto.page;
    this.totalItems = itemCount;
    this.totalPages = Math.ceil(itemCount / pageOptionsDto.limit);
    this.meta = meta;
  }
}
