import { Repository } from 'typeorm';
import { PageDto } from 'src/common/dto/page.dto';
import { FileService } from 'src/helper/file.helper';
import { Gift } from './entity/gift.entity';
import { FilterGiftDto } from './dto/filter-gift.dto';
export declare class GiftService {
    private repo;
    private readonly fileService;
    private readonly logger;
    constructor(repo: Repository<Gift>, fileService: FileService);
    createOrUpdate(data: Partial<Gift>, user_id?: number): Promise<Gift>;
    findOne(gift_id: string): Promise<Gift>;
    find(filter: FilterGiftDto): Promise<PageDto<Gift>>;
    delete(id: string): Promise<Gift>;
    exportExcel(): Promise<any>;
}
