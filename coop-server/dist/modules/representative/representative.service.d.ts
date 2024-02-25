import { Repository } from 'typeorm';
import { Representative } from './representative.entity';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterRepresentativeDto } from './dto/filter-representative.dto';
import { FileService } from 'src/helper/file.helper';
export declare class RepresentativeService {
    private repo;
    private readonly fileService;
    constructor(repo: Repository<Representative>, fileService: FileService);
    create(createData: CreateRepresentativeDto, user_id: number): Promise<Representative>;
    findOne(representative_id: string): Promise<Representative>;
    find(filter: FilterRepresentativeDto): Promise<PageDto<Representative>>;
    update(updateData: Partial<Representative>): Promise<Representative>;
    delete(representative_id: string): Promise<Representative>;
}
