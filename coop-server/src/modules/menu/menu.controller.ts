import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('get-by-user')
  findAll() {
    return this.menuService.findAll();
  }
}
