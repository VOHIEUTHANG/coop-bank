import { Body, Controller, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { CurrentUser } from '../users/decorators/current-user.decorator';
import { User } from '../users/users.entity';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { ExposeReportDto } from './dto/expose-report.dto';
import { ReviewReportDto } from './dto/review-report.dto';
import { AdminGuard } from 'src/guards/admin.guard';
import { GetEstimateDto } from './dto/get-estimate.dto';

@Serialize(ExposeReportDto)
@Controller('reports')
export class ReportsController {
  constructor(private reportService: ReportsService) {}

  @Post()
  @UseGuards(AuthGuard)
  createReport(@CurrentUser() user: User, @Body() report: CreateReportDto) {
    return this.reportService.create(report, user);
  }

  @Get()
  getEstimatedReport(@Query() query: GetEstimateDto) {
    return this.reportService.createEstimate(query);
  }

  @UseGuards(AdminGuard)
  @Patch('/:reportId')
  reviewReport(@Param('reportId') reportId: string, @Body() body: ReviewReportDto) {
    return this.reportService.review(parseInt(reportId), body.review_status);
  }
}
