import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { Branch } from 'src/modules/branch/branch.entity';
import { IsPhoneNumber } from 'src/common/validation';
import { TransactionRoom } from 'src/modules/transaction-room/transaction-room.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(5, { message: 'Tên đăng nhập phải có ít nhất 5 ký tự' })
  @ApiProperty()
  username: string;
  @ApiProperty()
  @MinLength(5, { message: 'Mật khẩu phải có ít nhất 5 ký tự' })
  @IsString()
  @IsNotEmpty()
  password: string;
  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsOptional()
  @IsPhoneNumber()
  phone_number: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  full_name: string;
  @ApiProperty({ default: false })
  @IsOptional()
  @IsBoolean()
  is_admin: boolean;
  @ApiProperty({ default: true })
  @IsOptional()
  @IsBoolean()
  is_active: boolean;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  branch_id: string;
  @IsOptional()
  branch: Branch;
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  transaction_room_id: string;
  @IsOptional()
  transaction_room: TransactionRoom;
}
