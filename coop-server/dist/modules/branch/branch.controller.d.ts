import { BranchService } from './branch.service';
import { UpdateBranchDto } from './dto/update-branch.dto';
import { CreateBranchDto } from './dto/create-branch.dto';
import { FilterBranchDto } from './dto/filter-branch.dto';
export declare class BranchController {
    private branchService;
    constructor(branchService: BranchService);
    create(branch: CreateBranchDto, request: any): Promise<import("./branch.entity").Branch>;
    getList(filter: FilterBranchDto): Promise<import("../../common/dto/page.dto").PageDto<import("./branch.entity").Branch>>;
    getOptions(): Promise<any[]>;
    getById(branch_id: string): Promise<import("./branch.entity").Branch>;
    update(updateBranchDto: UpdateBranchDto): Promise<import("./branch.entity").Branch>;
    delete(branch_id: string): Promise<import("./branch.entity").Branch>;
}
