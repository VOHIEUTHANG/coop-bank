import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Representative } from '../representative/representative.entity';
import { Brackets, Repository } from 'typeorm';
import { AffiliateUnit } from '../affiliate-unit/entity/affiliate-unit.entity';
import { Individual } from '../individual/entity/individual.entity';
import moment from 'moment';
import { DATE_FORMAT_DDMMYYYY } from 'src/constant/date.constant';
import { DATE_TYPE, OBJECT_TYPE } from './special-day.constant';
import { Position } from '../representative/constant';
import xl from 'excel4node';
import excelHelper from 'src/helper/excel.helper';

@Injectable()
export class SpecialDayService {
  constructor(
    @InjectRepository(Representative) private representativeRepo: Repository<Representative>,
    @InjectRepository(AffiliateUnit) private affiliateUnitRepo: Repository<AffiliateUnit>,
    @InjectRepository(Individual) private individualRepo: Repository<Individual>
  ) {}
  async getList() {
    const currentDate = new Date();

    const daysInCurrentMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const remainingDays = 5 - (daysInCurrentMonth - currentDate.getDate());

    const birthDayRepresentatives = await this._getListBirthDayRepresentative(
      currentDate,
      remainingDays
    );
    const foundingDateAffiliateUnits = await this._getListFoundingDateAffiliateUnit(
      currentDate,
      remainingDays
    );
    const effectiveDateFromRepresentatives = await this._getListEffectiveDateFromRepresentative(
      currentDate,
      remainingDays
    );
    const effectiveDateEndRepresentatives = await this._getListEffectiveDateEndRepresentative(
      currentDate,
      remainingDays
    );
    return [
      ...birthDayRepresentatives,
      ...foundingDateAffiliateUnits,
      ...effectiveDateFromRepresentatives,
      ...effectiveDateEndRepresentatives
    ]?.sort((a, b) => a.day_count - b.day_count);
  }

  async _getListBirthDayRepresentative(currentDate: Date, remainingDays: number) {
    const representatives = await this.representativeRepo
      .createQueryBuilder('rep')
      .where('rep.representative_position = :position', { position: Position.PRINCIPAL })
      .andWhere(
        new Brackets((qb) =>
          qb
            .where('DAY(rep.birth_date) = :day AND MONTH(rep.birth_date) = :month', {
              day: currentDate.getDate(),
              month: currentDate.getMonth() + 1
            })
            .orWhere(
              'DAY(rep.birth_date) - :day <= 5 AND DAY(rep.birth_date) > :day AND MONTH(rep.birth_date) = :month',
              {
                day: currentDate.getDate(),
                month: currentDate.getMonth() + 1
              }
            )
            .orWhere(
              'MONTH(rep.birth_date) = :nextMonth AND DAY(rep.birth_date) <= :remainingDays',
              {
                nextMonth: ((currentDate.getMonth() + 1) % 12) + 1,
                remainingDays: remainingDays > 0 ? remainingDays : 0
              }
            )
        )
      )
      .getMany();

    return representatives.map((item) => ({
      name: item.representative_name,
      id: item.representative_id,
      date: moment(item.birth_date).format(DATE_FORMAT_DDMMYYYY),
      object_type: OBJECT_TYPE.PRINCIPAL,
      date_type: DATE_TYPE.BIRTH_DATE,
      day_count: moment(item.birth_date)
        .set('year', moment().year())
        .endOf('day')
        .diff(moment(), 'days')
    }));
  }

  async _getListFoundingDateAffiliateUnit(currentDate: Date, remainingDays: number) {
    const affiliateUnits = await this.affiliateUnitRepo
      .createQueryBuilder('affiliate_unit')
      .andWhere(
        new Brackets((qb) =>
          qb
            .where(
              'DAY(affiliate_unit.founding_date) = :day AND MONTH(affiliate_unit.founding_date) = :month',
              {
                day: currentDate.getDate(),
                month: currentDate.getMonth() + 1
              }
            )
            .orWhere(
              'DAY(affiliate_unit.founding_date) - :day <= 5 AND DAY(affiliate_unit.founding_date) > :day AND MONTH(affiliate_unit.founding_date) = :month',
              {
                day: currentDate.getDate(),
                month: currentDate.getMonth() + 1
              }
            )
            .orWhere(
              'MONTH(affiliate_unit.founding_date) = :nextMonth AND DAY(affiliate_unit.founding_date) <= :remainingDays',
              {
                nextMonth: ((currentDate.getMonth() + 1) % 12) + 1,
                remainingDays: remainingDays > 0 ? remainingDays : 0
              }
            )
        )
      )
      .getMany();

    return affiliateUnits.map((item) => ({
      name: item.affiliate_unit_name,
      id: item.affiliate_unit_id,
      date: moment(item.founding_date).format(DATE_FORMAT_DDMMYYYY),
      object_type: OBJECT_TYPE.AFFILIATE_UNIT,
      date_type: DATE_TYPE.FOUNDING_DATE,
      day_count: moment(item.founding_date)
        .set('year', moment().year())
        .endOf('day')
        .diff(moment(), 'days')
    }));
  }

  async _getListEffectiveDateFromRepresentative(currentDate: Date, remainingDays: number) {
    const representatives = await this.representativeRepo
      .createQueryBuilder('rep')
      .where('rep.representative_position = :position', { position: Position.PRINCIPAL })
      .andWhere(
        new Brackets((qb) =>
          qb
            .where(
              'DAY(rep.effective_date_from) = :day AND MONTH(rep.effective_date_from) = :month',
              {
                day: currentDate.getDate(),
                month: currentDate.getMonth() + 1
              }
            )
            .orWhere(
              'DAY(rep.effective_date_from) - :day <= 5 AND DAY(rep.effective_date_from) > :day AND MONTH(rep.effective_date_from) = :month',
              {
                day: currentDate.getDate(),
                month: currentDate.getMonth() + 1
              }
            )
            .orWhere(
              'MONTH(rep.effective_date_from) = :nextMonth AND DAY(rep.effective_date_from) <= :remainingDays',
              {
                nextMonth: ((currentDate.getMonth() + 1) % 12) + 1,
                remainingDays: remainingDays > 0 ? remainingDays : 0
              }
            )
        )
      )
      .getMany();

    return representatives.map((item) => ({
      name: item.representative_name,
      id: item.representative_id,
      date: moment(item.effective_date_from).format(DATE_FORMAT_DDMMYYYY),
      object_type: OBJECT_TYPE.PRINCIPAL,
      date_type: DATE_TYPE.EFFECTIVE_DATE_FROM,
      day_count: moment(item.effective_date_from)
        .set('year', moment().year())
        .endOf('day')
        .diff(moment(), 'days')
    }));
  }

  async _getListEffectiveDateEndRepresentative(currentDate: Date, remainingDays: number) {
    const representatives = await this.representativeRepo
      .createQueryBuilder('rep')
      .where('rep.representative_position = :position', { position: Position.PRINCIPAL })
      .andWhere(
        new Brackets((qb) =>
          qb
            .where('DAY(rep.effective_date_to) = :day AND MONTH(rep.effective_date_to) = :month', {
              day: currentDate.getDate(),
              month: currentDate.getMonth() + 1
            })
            .orWhere(
              'DAY(rep.effective_date_to) - :day <= 5 AND DAY(rep.effective_date_to) > :day AND MONTH(rep.effective_date_to) = :month',
              {
                day: currentDate.getDate(),
                month: currentDate.getMonth() + 1
              }
            )
            .orWhere(
              'MONTH(rep.effective_date_to) = :nextMonth AND DAY(rep.effective_date_to) <= :remainingDays',
              {
                nextMonth: ((currentDate.getMonth() + 1) % 12) + 1,
                remainingDays: remainingDays > 0 ? remainingDays : 0
              }
            )
        )
      )
      .getMany();

    return representatives.map((item) => ({
      name: item.representative_name,
      id: item.representative_id,
      date: moment(item.effective_date_to).format(DATE_FORMAT_DDMMYYYY),
      object_type: OBJECT_TYPE.PRINCIPAL,
      date_type: DATE_TYPE.EFFECTIVE_DATE_TO,
      day_count: moment(item.effective_date_to)
        .set('year', moment().year())
        .endOf('day')
        .diff(moment(), 'days')
    }));
  }

  async getListNotify() {
    const specialDays = await this.getList();

    const notifys = specialDays.map((item) => ({
      subject: `${
        item.day_count > 0 ? `Còn ${item.day_count} là đến` : 'Hôm nay là'
      } ${this._getDateName(item.date_type)?.toLocaleLowerCase()} của ${this._getObjectName(
        item.object_type
      )?.toLocaleLowerCase()} - ${item.name}`
    }));

    return notifys;
  }

  async getNotifyCount() {
    const specialDays = await this.getList();
    return specialDays.length || 0;
  }

  async exportExcel() {
    const data = await this.getList();

    const workbook = new xl.Workbook();

    const BUDGET_SHEETS_NAME = 'Bảng theo dõi ngày đặc biệt';
    const WorkSheet = workbook.addWorksheet(BUDGET_SHEETS_NAME);

    const columns = [
      {
        key: 'name',
        title: 'Tên đối tượng',
        width: 40
      },
      {
        key: 'object_type',
        title: 'Loại đối tượng',
        transform: (value: number) => this._getObjectName(value),
        width: 40
      },
      {
        key: 'date_type',
        title: 'Loại ngày đặc biệt',
        transform: (value: number) => this._getDateName(value),
        width: 40
      },
      {
        key: 'date',
        title: 'Ngày đặc biệt',
        width: 40
      },
      {
        key: 'day_count',
        title: 'Ngày còn lại',
        transform: (value: number) => `${value} ngày`,
        width: 40
      }
    ];

    const NUMBERED = true;
    excelHelper.createTableData(WorkSheet, columns, data, NUMBERED);

    return workbook;
  }
  _getDateName(dateType: number) {
    return dateType === DATE_TYPE.BIRTH_DATE
      ? 'Ngày sinh nhật'
      : dateType === DATE_TYPE.FOUNDING_DATE
        ? 'Ngày thành lập'
        : dateType === DATE_TYPE.EFFECTIVE_DATE_FROM
          ? 'Ngày bắt đầu nhiệm kỳ'
          : dateType === DATE_TYPE.EFFECTIVE_DATE_TO
            ? 'Ngày kết thúc nhiệm kỳ'
            : 'Không xác định';
  }
  _getObjectName(objectType: number) {
    return objectType === OBJECT_TYPE.PRINCIPAL
      ? 'Hiệu trưởng'
      : objectType === OBJECT_TYPE.INDIVIDUAL
        ? 'Cá nhân'
        : 'Đơn vị liên kết';
  }
}
