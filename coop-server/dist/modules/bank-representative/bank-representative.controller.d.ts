import { BankRepresentativeService } from './bank-representative.service';
import { UpdateBankRepresentativeDto } from './dto/update-bank-representative.dto';
import { CreateBankRepresentativeDto } from './dto/create-bank-representative.dto';
import { FilterBankRepresentativeDto } from './dto/filter-bank-representative.dto';
export declare class BankRepresentativeController {
    private bankRepresentativeService;
    constructor(bankRepresentativeService: BankRepresentativeService);
    create(createData: CreateBankRepresentativeDto, request: any): Promise<import("./bank-representative.entity").BankRepresentative>;
    getList(filter: FilterBankRepresentativeDto): Promise<import("../../common/dto/page.dto").PageDto<import("./bank-representative.entity").BankRepresentative>>;
    getById(bank_representative_id: string): Promise<import("./bank-representative.entity").BankRepresentative>;
    update(updateData: UpdateBankRepresentativeDto): Promise<import("./bank-representative.entity").BankRepresentative>;
    delete(bank_representative_id: string): Promise<import("./bank-representative.entity").BankRepresentative>;
}
