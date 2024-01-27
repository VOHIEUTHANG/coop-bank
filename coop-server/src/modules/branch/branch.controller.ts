import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';
import { BranchService } from './branch.service';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Get()
  getList() {
    return this.branchService.findAll();
  }

  @Post()
  createBranch(@Body() body: CreateBranchDto) {
    return this.branchService.create(body.name);
  }

  @Get('/:branch_id')
  async getDetailBranch(@Param('branch_id') branchId: string) {
    const branch = await this.branchService.findOne(branchId);
    if (!branch) {
      throw new NotFoundException('branch not found');
    }

    return branch;
  }
}
