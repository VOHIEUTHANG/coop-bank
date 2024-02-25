import { AffiliateUnitService } from './affiliate-unit.service';
import { CreateAffilicateUnitDto } from './dto/create-affiliate-unit.dto';
import { FilterAffilicateUnitDto } from './dto/filter-affiliate-unit.dto';
import { UpdateAffilicateUnitDto } from './dto/update-affiliate-unit.dto';
import { ExportFormAffilateUnitDto } from './dto/export-form.dto';
export declare class AffiliateUnitController {
    private service;
    constructor(service: AffiliateUnitService);
    create(createData: CreateAffilicateUnitDto, request: any): Promise<import("./entity/affiliate-unit.entity").AffiliateUnit>;
    getList(filter: FilterAffilicateUnitDto): Promise<import("../../common/dto/page.dto").PageDto<import("./entity/affiliate-unit.entity").AffiliateUnit>>;
    getOptions(): Promise<any[]>;
    exportForm(affilateUnitId: string, query: ExportFormAffilateUnitDto, response: any, request: any): Promise<void>;
    getById(id: string): Promise<import("./entity/affiliate-unit.entity").AffiliateUnit>;
    update(updateData: UpdateAffilicateUnitDto): Promise<import("./entity/affiliate-unit.entity").AffiliateUnit>;
    delete(id: string): Promise<import("./entity/affiliate-unit.entity").AffiliateUnit>;
}
