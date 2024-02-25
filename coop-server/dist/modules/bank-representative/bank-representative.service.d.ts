import { Repository } from 'typeorm';
import { BankRepresentative } from './bank-representative.entity';
import { CreateBankRepresentativeDto } from './dto/create-bank-representative.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterBankRepresentativeDto } from './dto/filter-bank-representative.dto';
export declare class BankRepresentativeService {
    private repo;
    constructor(repo: Repository<BankRepresentative>);
    create(createData: CreateBankRepresentativeDto, user_id: number): Promise<BankRepresentative>;
    findOne(bank_representative_id: string): Promise<BankRepresentative>;
    find(filter: FilterBankRepresentativeDto): Promise<PageDto<BankRepresentative>>;
    update(updateData: Partial<BankRepresentative>): Promise<BankRepresentative>;
    delete(bank_representative_id: string): Promise<BankRepresentative>;
}
