import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Brackets, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Representative } from './representative.entity';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterRepresentativeDto } from './dto/filter-representative.dto';
import { generateId } from 'src/utils/string.util';
import { User } from '../users/users.entity';
import { stringifyDate, transformDate } from 'src/utils/date.util';
import { FileService } from 'src/helper/file.helper';
import { EXPORT_LIMIT } from 'src/constant/pagination.constant';
import xl from 'excel4node';
import excelHelper from 'src/helper/excel.helper';
import moment from 'moment';
import { DATE_FORMAT_DDMMYYYY } from 'src/constant/date.constant';
import { Gender } from 'src/types/data-type';

@Injectable()
export class RepresentativeService {
  constructor(
    @InjectRepository(Representative) private repo: Repository<Representative>,
    private readonly fileService: FileService
  ) {}

  async create(createData: CreateRepresentativeDto, user_id: number) {
    const existedSameIdNumber = await this.repo.findOneBy({
      id_number: createData.id_number
    });

    if (existedSameIdNumber) {
      throw new BadRequestException(
        `Đã tồn tại người đại diện với căn cước công dân số ${createData.id_number}`
      );
    }

    createData.effective_date_to = transformDate(createData.effective_date_to);
    createData.effective_date_from = transformDate(createData.effective_date_from);
    createData.decision_date = transformDate(createData.decision_date);
    createData.id_issued_date = transformDate(createData.id_issued_date);
    createData.birth_date = transformDate(createData.birth_date);

    createData.representative_id = generateId();
    createData.created_user = new User(user_id);

    this.fileService.saveFileField(createData, 'id_front_image');
    this.fileService.saveFileField(createData, 'id_back_image');

    const representative = this.repo.create(createData);
    return this.repo.save(representative);
  }

  async findOne(representative_id: string) {
    const representative = await this.repo.findOneBy({ representative_id });
    if (!representative) {
      throw new NotFoundException('Không tìm thấy người đại diện !');
    }
    return representative;
  }

  async find(filter: FilterRepresentativeDto, currentUser: User) {
    const queryBuilder = this.repo.createQueryBuilder('representative');

    queryBuilder
      .where(
        new Brackets((qb) =>
          qb
            .where('representative.representative_name like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('representative.id_number like :search', {
              search: `%${filter.search}%`
            })
            .orWhere('representative.phone_number like :search', {
              search: `%${filter.search}%`
            })
        )
      )
      .andWhere(
        new Brackets((qb) =>
          qb.where(`${currentUser.is_admin} = 1`).orWhere(
            new Brackets((qbc) =>
              qbc
                .where(!!currentUser.branch.branch_id && 'user.branch_id = :branch_id', {
                  branch_id: currentUser.branch.branch_id
                })
                .andWhere(
                  currentUser?.transaction_room?.transaction_room_id
                    ? 'user.transaction_room_id = :transaction_room_id'
                    : 'user.transaction_room_id IS NULL',
                  {
                    transaction_room_id: currentUser?.transaction_room?.transaction_room_id
                  }
                )
            )
          )
        )
      )
      .andWhere(!!filter.created_date_from && 'representative.created_at >= :created_date_from', {
        created_date_from: filter.created_date_from
      })
      .andWhere(!!filter.created_date_to && 'representative.created_at <= :created_date_to', {
        created_date_to: filter.created_date_to
      })
      .leftJoinAndSelect('representative.created_user', 'user')
      .orderBy('representative.created_at', filter.order)
      .skip(filter.skip)
      .take(filter.limit);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    return new PageDto(entities, filter, itemCount);
  }

  async update(updateData: Partial<Representative>) {
    const representative = await this.findOne(updateData.representative_id);

    updateData.effective_date_to = transformDate(updateData.effective_date_to);
    updateData.effective_date_from = transformDate(updateData.effective_date_from);
    updateData.decision_date = transformDate(updateData.decision_date);
    updateData.id_issued_date = transformDate(updateData.id_issued_date);
    updateData.birth_date = transformDate(updateData.birth_date);

    this.fileService.saveFileField(updateData, 'id_front_image');
    this.fileService.saveFileField(updateData, 'id_back_image');

    Object.assign(representative, updateData);
    return this.repo.save(representative);
  }

  async delete(representative_id: string) {
    const branch = await this.findOne(representative_id);

    branch.deleted_at = new Date().toISOString();
    return this.repo.save(branch);
  }

  async exportExcel(filter: FilterRepresentativeDto, currentUser: User) {
    filter.limit = EXPORT_LIMIT;
    const data = await this.find(filter, currentUser);
    const workbook = new xl.Workbook();

    const BUDGET_SHEETS_NAME = 'Tổng hợp ban lãnh đạo';
    const WorkSheet = workbook.addWorksheet(BUDGET_SHEETS_NAME);

    const columns = [
      {
        key: 'representative_name',
        title: 'Tên BLĐ'
      },
      {
        key: 'phone_number',
        title: 'SĐT BLD'
      },
      {
        key: 'representative_position',
        title: 'Chức vụ'
      },
      {
        key: 'birth_date',
        title: 'Ngày sinh BLĐ',
        transform: (value: any) => stringifyDate(value)
      },
      {
        key: 'gender',
        title: 'Giới tính',
        transform: (value: any) => (value == Gender.Female ? 'Nam' : 'Nữ')
      },
      {
        key: 'id_number',
        title: 'CCCD'
      },
      {
        key: 'id_issued_date',
        title: 'Ngày cấp CCCD',
        transform: (value: any) => stringifyDate(value)
      },
      {
        key: 'address',
        title: 'Địa chỉ BLĐ',
        width: 50
      },
      {
        key: 'representative_email',
        title: 'Email BLĐ'
      },
      {
        key: 'decision_number',
        title: 'SỐ QĐ BLD'
      },
      {
        key: 'decision_date',
        title: 'NGÀY QĐ BD',
        transform: (value: any) => stringifyDate(value)
      },
      {
        key: 'effective_date_to',
        title: 'NGÀY QĐ KẾT THÚC',
        transform: (value: any) => stringifyDate(value)
      },
      {
        key: 'decision_district',
        title: 'NƠI CẤP QĐ'
      },
      {
        key: 'decider_name',
        title: 'NGƯỜI RA QĐ'
      }
    ];

    const NUMBERED = true;
    const START_COL = 1;
    const START_ROW = 7;
    const COL_WIDTH = 20;

    excelHelper.createTableData(
      WorkSheet,
      columns,
      data.items,
      NUMBERED,
      START_COL,
      START_ROW,
      COL_WIDTH,
      {
        title: 'Tổng hợp ban lãnh đạo',
        date_from:
          filter.created_date_from && moment(filter.created_date_from).format(DATE_FORMAT_DDMMYYYY),
        date_to:
          filter.created_date_to && moment(filter.created_date_to).format(DATE_FORMAT_DDMMYYYY)
      }
    );

    return workbook;
  }
}
