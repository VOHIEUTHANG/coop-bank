import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateBranchDto } from './dto/create-branch.dto';

@Controller('branch')
export class BranchController {
  @Get()
  getList() {
    return 'branches data';
  }

  @Post()
  createBranch(@Body() body: CreateBranchDto) {
    console.log('🚀 ~ BranchController ~ createBranch ~ body:', body);
    return 'branches data';
  }

  @Get('/:branch_id')
  getDetailBranch(@Param('branch_id') branchId: number) {
    console.log('🚀 ~ BranchController ~ getDetailBranch ~ branchId:', branchId);
    return 'branches data';
  }
}
