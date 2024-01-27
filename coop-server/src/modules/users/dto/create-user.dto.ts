import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(5)
  @ApiProperty()
  username: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @MinLength(5)
  @IsString()
  @IsNotEmpty()
  password: string;
}
