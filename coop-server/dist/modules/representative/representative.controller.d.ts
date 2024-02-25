import { RepresentativeService } from './representative.service';
import { UpdateRepresentativeDto } from './dto/update-representative.dto';
import { CreateRepresentativeDto } from './dto/create-representative.dto';
import { FilterRepresentativeDto } from './dto/filter-representative.dto';
export declare class RepresentativeController {
    private representativeService;
    constructor(representativeService: RepresentativeService);
    create(createData: CreateRepresentativeDto, request: any): Promise<import("./representative.entity").Representative>;
    getList(filter: FilterRepresentativeDto): Promise<import("../../common/dto/page.dto").PageDto<import("./representative.entity").Representative>>;
    getById(representative_id: string): Promise<import("./representative.entity").Representative>;
    update(updateData: UpdateRepresentativeDto): Promise<import("./representative.entity").Representative>;
    delete(representative_id: string): Promise<import("./representative.entity").Representative>;
}
