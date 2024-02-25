import { Repository } from 'typeorm';
import { Branch } from './branch.entity';
import { CreateBranchDto } from './dto/create-branch.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterBranchDto } from './dto/filter-branch.dto';
import { UpdateBranchDto } from './dto/update-branch.dto';
export declare class BranchService {
    private repo;
    constructor(repo: Repository<Branch>);
    create(branchData: CreateBranchDto, user_id: number): Promise<Branch>;
    getOptions(): Promise<any[]>;
    findOne(branch_id: string): Promise<Branch>;
    find(filter: FilterBranchDto): Promise<PageDto<Branch>>;
    update(attrs: UpdateBranchDto): Promise<Branch>;
    delete(branch_id: string): Promise<Branch>;
}
