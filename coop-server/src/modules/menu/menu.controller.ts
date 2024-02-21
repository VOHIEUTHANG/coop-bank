import { Controller, Get, Request } from '@nestjs/common';
import { MenuService } from './menu.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('get-by-user')
  findAll(@Request() req) {
    return this.menuService.findAll(req.user);
  }
}
