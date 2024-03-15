import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PageDto } from 'src/common/dto/page.dto';
import { formatCurrency, generateId } from 'src/utils/string.util';
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
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';

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

    if (data.proposed_user_id) {
      data.proposed_user = new User(data.proposed_user_id);
      delete data.proposed_user_id;
    }

    data.gift_date = transformDate(data.gift_date);
    data.proposed_date = transformDate(data.proposed_date);

    this.fileService.saveFileField(data, 'gift_image_1');
    this.fileService.saveFileField(data, 'gift_image_2');
    this.fileService.saveFileField(data, 'gift_image_3');
    this.fileService.saveFileField(data, 'gift_image_4');

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
        new Brackets(
          (qb) =>
            qb.where('gift.gift_id like :search', {
              search: `%${filter.search}%`
            })
          // .orWhere('gift.gift_description like :search', {
          //   search: `%${filter.search}%`
          // })
        )
      )
      .andWhere(!!filter.created_date_from && 'gift.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'gift.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .andWhere(!!filter.affiliate_unit_id && 'gift.affiliate_unit_id = :affiliate_unit_id', {
        affiliate_unit_id: filter.affiliate_unit_id
      })
      .leftJoinAndSelect('gift.created_user', 'created_user')
      .leftJoinAndSelect('gift.giver_user', 'giver_user')
      .leftJoinAndSelect('gift.proposed_user', 'proposed_user')
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

  async exportExcel(filter: FilterGiftDto) {
    filter.limit = 100000;
    const data = await this.find(filter);
    // mapping data
    const serilizedData = data.items?.reduce((acc, gift) => {
      const giftList = (gift.gifts && JSON.parse(gift.gifts)) || [];
      return acc.concat(
        giftList?.map((giftItem: any) => ({
          ...giftItem,
          unit_name: gift.affiliate_unit.affiliate_unit_name,
          unit_code: gift.affiliate_unit.affiliate_unit_code,
          unit_phone: gift.affiliate_unit.affiliate_unit_phone,
          gift_date: moment(gift.gift_date).format(DATE_FORMAT_DDMMYYYY),
          giver_user: gift.giver_user.full_name
        }))
      );
    }, []);

    const workbook = new xl.Workbook();

    const BUDGET_SHEETS_NAME = 'Bảng theo dõi quà tặng';
    const WorkSheet = workbook.addWorksheet(BUDGET_SHEETS_NAME);

    const columns = [
      {
        key: 'gift_date',
        title: 'Ngày'
      },
      {
        key: 'unit_name',
        title: 'Đơn vị',
        width: 30
      },
      {
        key: 'unit_code',
        title: 'Mã đơn vị'
      },
      {
        key: 'unit_phone',
        title: 'Số điện thoại'
      },
      {
        key: 'gift_name',
        title: 'Nội dung'
      },
      {
        key: 'gift_quantity',
        title: 'Số lượng'
      },
      {
        key: 'gift_price',
        title: 'Giá trị',
        transform: (value: any) => formatCurrency(value) + ' đ'
      },
      {
        key: 'gift_price',
        title: 'Thành tiền',
        transform: (_: any, row: any) => formatCurrency(row.gift_quantity * row.gift_price) + ' đ'
      },
      {
        key: 'giver_user',
        title: 'Người tặng'
      },
      {
        key: 'unit_name',
        title: 'Người nhận',
        width: 50
      }
    ];

    const NUMBERED = true;
    const START_COL = 1;
    const START_ROW = 7;
    const IS_EXPORT_FOR_GIFT = true;
    excelHelper.createTableData(
      WorkSheet,
      columns,
      serilizedData,
      NUMBERED,
      START_COL,
      START_ROW,
      20,
      IS_EXPORT_FOR_GIFT,
      {
        date_from:
          filter.created_date_from && moment(filter.created_date_from).format(DATE_FORMAT_DDMMYYYY),
        date_to:
          filter.created_date_to && moment(filter.created_date_to).format(DATE_FORMAT_DDMMYYYY)
      }
    );

    return workbook;
  }
  async exportProposedForm(giftId: string) {
    const gift = await this.findOne(giftId);

    const docData = {
      unit_name: gift.affiliate_unit.affiliate_unit_name,
      unit_code: gift.affiliate_unit.affiliate_unit_code,
      proposed_user_name: gift.proposed_user.full_name,
      unit_address: gift.affiliate_unit.affiliate_unit_address
    };

    const gifts = gift.gifts && JSON.parse(gift.gifts);

    gifts?.forEach((giftItem: any, index: number) => {
      docData[`gift_name_${index + 1}`] = giftItem.gift_name;
      docData[`gift_order_${index + 1}`] = index + 1;
      docData[`gift_quantity_${index + 1}`] = giftItem.gift_quantity;
      docData[`gift_price_${index + 1}`] = formatCurrency(giftItem.gift_price);
      docData[`gift_total_${index + 1}`] = formatCurrency(
        giftItem.gift_price * giftItem.gift_quantity
      );
      docData[`gift_unit_name_${index + 1}`] = docData.unit_name;
      docData[`gift_unit_code_${index + 1}`] = docData.unit_code;
      docData[`gift_unit_address_${index + 1}`] = docData.unit_address;
      docData[`gift_proposed_user_name_${index + 1}`] = docData.proposed_user_name;
    });

    let loopCount = 5;
    while (loopCount--) {
      const giftItem = gifts[4 - loopCount];

      docData[`gift_name_${5 - loopCount}`] = giftItem?.gift_name || '';
      docData[`gift_order_${5 - loopCount}`] = giftItem ? 5 - loopCount : '';
      docData[`gift_quantity_${5 - loopCount}`] = giftItem?.gift_quantity || '';
      docData[`gift_price_${5 - loopCount}`] = giftItem ? formatCurrency(giftItem?.gift_price) : '';
      docData[`gift_total_${5 - loopCount}`] = giftItem
        ? formatCurrency(giftItem?.gift_price * giftItem?.gift_quantity)
        : '';
      docData[`gift_unit_name_${5 - loopCount}`] = giftItem ? docData.unit_name : '';
      docData[`gift_unit_code_${5 - loopCount}`] = giftItem ? docData.unit_code : '';
      docData[`gift_unit_address_${5 - loopCount}`] = giftItem ? docData.unit_address : '';
      docData[`gift_proposed_user_name_${5 - loopCount}`] = giftItem
        ? docData.proposed_user_name
        : '';
    }

    const templateContent = fs.readFileSync('src/template/doc/GIFT_proposed_form.docx', 'binary');
    const zip = new PizZip(templateContent);
    const doc = new Docxtemplater(zip);
    doc.setData(docData);
    doc.render();
    const buffer = doc.getZip().generate({ type: 'nodebuffer' });
    return buffer;
  }
}
