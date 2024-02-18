import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsNumber()
  user_id: number;
}
