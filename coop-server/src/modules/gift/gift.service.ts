import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto } from 'src/common/dto/page.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { FileService } from 'src/helper/file.helper';
import { Gift } from './entity/gift.entity';
import { FilterGiftDto } from './dto/filter-gift.dto';
import { AffiliateUnit } from '../affiliate-unit/entity/affiliate-unit.entity';
import { transformDate } from 'src/utils/date.util';
import xl from 'excel4node';
import excelHelper from 'src/helper/excel.helper';
import moment from 'moment';
import { DATE_FORMAT_DDMMYYYY } from 'src/constant/date.constant';

@Injectable()
export class GiftService {
  private readonly logger = new Logger(GiftService.name);

  constructor(
    @InjectRepository(Gift) private repo: Repository<Gift>,
    private readonly fileService: FileService
  ) {}

  async createOrUpdate(data: Partial<Gift>, user_id?: number) {
    let newData = { ...data };

    if (data.gift_id) {
      newData = await this.findOne(data.gift_id);
    } else {
      newData.gift_id = generateId();
      newData.created_user = new User(user_id);
    }

    if (data.affiliate_unit_id) {
      data.affiliate_unit = new AffiliateUnit(data.affiliate_unit_id);
      delete data.affiliate_unit_id;
    }

    if (data.giver_user_id) {
      data.giver_user = new User(data.giver_user_id);
      delete data.giver_user_id;
    }

    data.gift_date = transformDate(data.gift_date);

    this.fileService.saveFileField(data, 'gift_image_1');
    this.fileService.saveFileField(data, 'gift_image_2');
    this.fileService.saveFileField(data, 'gift_image_3');

    Object.assign(newData, data);

    const gift = this.repo.create(newData);
    return this.repo.save(gift);
  }

  async findOne(gift_id: string) {
    const object = await this.repo.findOneBy({ gift_id });
    if (!object) {
      throw new NotFoundException('Không tìm thấy quà tặng !');
    }
    return object;
  }

  async find(filter: FilterGiftDto) {
    const queryBuilder = this.repo.createQueryBuilder('gift');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb
            .where('gift.gift_content like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('gift.gift_description like :search', {
              search: `%${filter.search}%`
            })
        )
      )
      .andWhere(!!filter.created_date_from && 'gift.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'gift.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('gift.created_user', 'created_user')
      .leftJoinAndSelect('gift.giver_user', 'giver_user')
      .leftJoinAndSelect('gift.affiliate_unit', 'affiliate_unit')
      .orderBy('gift.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async delete(id: string) {
    const object = await this.findOne(id);

    object.deleted_at = new Date().toISOString();
    return this.repo.save(object);
  }

  async exportExcel() {
    const data = await this.repo.find();

    const workbook = new xl.Workbook();

    const BUDGET_SHEETS_NAME = 'Bảng theo dõi quà tặng';
    const WorkSheet = workbook.addWorksheet(BUDGET_SHEETS_NAME);

    const columns = [
      {
        key: 'gift_content',
        title: 'Nội dung quà tặng',
        width: 70
      },
      {
        key: 'gift_description',
        title: 'Mô tả quà tặng',
        width: 70
      },
      {
        title: 'Đơn vị nhận',
        transform: (value: any, gift: Gift) => gift.affiliate_unit.affiliate_unit_name
      },
      {
        title: 'Người tặng',
        transform: (value: any, gift: Gift) => gift.giver_user.full_name
      },
      {
        key: 'gift_date',
        title: 'Ngày tặng',
        transform: (value: string) => moment(value).format(DATE_FORMAT_DDMMYYYY)
      }
    ];

    const NUMBERED = true;
    excelHelper.createTableData(WorkSheet, columns, data, NUMBERED);

    return workbook;
  }
}
