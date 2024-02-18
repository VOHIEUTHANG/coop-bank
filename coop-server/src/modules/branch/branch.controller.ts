import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Post,
  Query,
  UseInterceptors,
  ClassSerializerInterceptor,
  Request
} from '@nestjs/common';
import { BranchService } from './branch.service';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CreateBranchDto } from './dto/create-branch.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { FilterBranchDto } from './dto/filter-branch.dto';

@ApiTags('Branch')
@UseInterceptors(ClassSerializerInterceptor)
@Controller('branch')
@ApiBearerAuth()
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Post()
  create(@Body() branch: CreateBranchDto, @Request() request) {
    return this.branchService.create(branch, request.user.sub);
  }

  @Get()
  getList(@Query() filter: FilterBranchDto) {
    return this.branchService.find(filter);
  }

  @Get('options')
  getOptions() {
    return this.branchService.getOptions();
  }

  @Get(':branch_id')
  getById(@Param('branch_id') branch_id: string) {
    return this.branchService.findOne(branch_id);
  }

  @Patch()
  update(@Body() updateBranchDto: UpdateBranchDto) {
    return this.branchService.update(updateBranchDto);
  }

  @Delete(':branch_id')
  delete(@Param('branch_id') branch_id: string) {
    return this.branchService.delete(branch_id);
  }
}
