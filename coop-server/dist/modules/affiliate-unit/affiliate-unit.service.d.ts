/// <reference types="node" />
import { DataSource, Repository } from 'typeorm';
import { AffiliateUnit } from './entity/affiliate-unit.entity';
import { CreateAffilicateUnitDto } from './dto/create-affiliate-unit.dto';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterAffilicateUnitDto } from './dto/filter-affiliate-unit.dto';
import { User } from '../users/users.entity';
import { FileService } from 'src/helper/file.helper';
export declare class AffiliateUnitService {
    private repo;
    private userRepo;
    private dataSource;
    private readonly fileService;
    constructor(repo: Repository<AffiliateUnit>, userRepo: Repository<User>, dataSource: DataSource, fileService: FileService);
    create(createData: CreateAffilicateUnitDto, user_id: number): Promise<AffiliateUnit>;
    findOne(affiliate_unit_id: string): Promise<AffiliateUnit>;
    find(filter: FilterAffilicateUnitDto): Promise<PageDto<AffiliateUnit>>;
    update(updateData: Partial<AffiliateUnit>): Promise<AffiliateUnit>;
    delete(id: string): Promise<AffiliateUnit>;
    getOptions(): Promise<any[]>;
    getBranchData(userId: number): Promise<any>;
    getAffiliateUnitData(affiliateUnitId: string): Promise<any>;
    exportAffilateContract(affiliateUnitId: string, userId: number): Promise<Buffer>;
    exportServicentract(affiliateUnitId: string, userId: number): Promise<Buffer>;
    exportAssignPay(affiliateUnitId: string, userId: number): Promise<Buffer>;
    exportPeriodicalCheck(affiliateUnitId: string, userId: number): Promise<Buffer>;
}
