import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ChangePasswordDto {
  @ApiProperty()
  @IsString()
  old_password: string;
  @ApiProperty()
  @IsString()
  new_password: string;
}
