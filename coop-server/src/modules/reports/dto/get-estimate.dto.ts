import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { Transform } from 'class-transformer';
import { IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from 'class-validator';

export class GetEstimateDto {
  @ApiProperty({ default: 'Toyota' })
  @IsString()
  make: string;
  @ApiProperty()
  @IsString()
  model: string;
  @Transform(({ value }) => parseInt(value))
  @ApiProperty({ default: 1930 })
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  @IsLongitude()
  lng: number;
  @Transform(({ value }) => parseFloat(value))
  @ApiProperty()
  @IsLatitude()
  lat: number;
  @Transform(({ value }) => parseInt(value))
  @ApiProperty({ default: 1000 })
  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;
}
