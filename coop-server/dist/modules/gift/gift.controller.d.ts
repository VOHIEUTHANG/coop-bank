import { GiftService } from './gift.service';
import { FilterGiftDto } from './dto/filter-gift.dto';
import { CreateGiftDto } from './dto/create-gift.dto';
import { UpdateGiftDto } from './dto/update-gift.dto';
export declare class GiftController {
    private service;
    constructor(service: GiftService);
    create(createData: CreateGiftDto, request: any): Promise<import("./entity/gift.entity").Gift>;
    getList(filter: FilterGiftDto): Promise<import("../../common/dto/page.dto").PageDto<import("./entity/gift.entity").Gift>>;
    exportExcel(res: any): Promise<void>;
    getById(id: string): Promise<import("./entity/gift.entity").Gift>;
    update(updateData: UpdateGiftDto): Promise<import("./entity/gift.entity").Gift>;
    delete(id: string): Promise<import("./entity/gift.entity").Gift>;
}
