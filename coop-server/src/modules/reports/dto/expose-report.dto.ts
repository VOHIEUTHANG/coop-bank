import { Expose, Transform } from 'class-transformer';
export class ExposeReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  mileage: number;
  @Expose()
  review_status: boolean;
  @Transform(({ obj }) => obj.user?.username)
  @Expose()
  username: string;
}
