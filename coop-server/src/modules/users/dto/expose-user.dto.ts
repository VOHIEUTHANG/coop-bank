import { Expose } from 'class-transformer';

export class ExposeUserDto {
  @Expose()
  username: string;
  password: string;
  @Expose()
  email: string;
}
