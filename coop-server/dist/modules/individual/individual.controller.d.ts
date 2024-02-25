import { IndividualService } from './individual.service';
import { CreateIndividualDto } from './dto/create-individual.dto';
import { FilterIndividualDto } from './dto/filter-individual.dto';
import { UpdateIndividualDto } from './dto/update-individual.dto';
import { ExportFormIndividualDto } from './dto/export-form.dto';
export declare class IndividualController {
    private service;
    constructor(service: IndividualService);
    create(createData: CreateIndividualDto, request: any): Promise<import("./entity/individual.entity").Individual>;
    getList(filter: FilterIndividualDto): Promise<import("../../common/dto/page.dto").PageDto<import("./entity/individual.entity").Individual>>;
    getById(id: string, request: any): Promise<import("./entity/individual.entity").Individual>;
    update(updateData: UpdateIndividualDto): Promise<import("./entity/individual.entity").Individual>;
    delete(id: string): Promise<import("./entity/individual.entity").Individual>;
    exportForm(individualId: string, query: ExportFormIndividualDto, response: any, request: any): Promise<void>;
}
