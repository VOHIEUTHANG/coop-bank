import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { IsLatitude, IsLongitude, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReportDto {
  @ApiProperty({ default: 'Toyota' })
  @IsString()
  make: string;
  @ApiProperty()
  @IsString()
  model: string;
  @ApiProperty({ default: 1930 })
  @IsNumber()
  @Min(1930)
  @Max(2050)
  year: number;
  @ApiProperty()
  @IsLongitude()
  lng: number;
  @ApiProperty()
  @IsLatitude()
  lat: number;
  @ApiProperty({ default: 1000 })
  @IsNumber()
  @Min(0)
  @Max(1000000)
  mileage: number;
  @ApiProperty({ default: 10000 })
  @IsNumber()
  @Min(0)
  @Max(1000000)
  price: number;
}
