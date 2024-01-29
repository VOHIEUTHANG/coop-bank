import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './reports.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { User } from '../users/users.entity';
import { GetEstimateDto } from './dto/get-estimate.dto';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private reportRepository: Repository<Report>) {}
  async create(reportData: CreateReportDto, user: User) {
    const report = this.reportRepository.create(reportData);
    report.user = user;
    return this.reportRepository.save(report);
  }

  async review(reportId: number, reviewStatus: boolean) {
    const report = await this.reportRepository.findOneBy({ id: reportId });
    if (!report) {
      return new NotFoundException('report not found !');
    }
    report.review_status = reviewStatus;
    return this.reportRepository.save(report);
  }

  async createEstimate({ make, model, lng, lat, year, mileage }: GetEstimateDto) {
    return this.reportRepository
      .createQueryBuilder()
      .select('AVG(price)', 'price')
      .where('make = :make', { make })
      .andWhere('model = :model', { model })
      .andWhere('lng - :lng BETWEEN -5 AND 5', { lng })
      .andWhere('lat - :lat BETWEEN -5 AND 5', { lat })
      .andWhere('year - :year BETWEEN -3 AND 3', { year })
      .andWhere('is_review IS TRUE')
      .orderBy('ABS(mileage - :mileage)', 'DESC')
      .setParameter('mileage', mileage)
      .limit(3)
      .getRawOne();
  }
}
