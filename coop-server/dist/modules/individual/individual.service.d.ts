/// <reference types="node" />
import { DataSource, Repository } from 'typeorm';
import { Individual } from './entity/individual.entity';
import { PageDto } from 'src/common/dto/page.dto';
import { FilterIndividualDto } from './dto/filter-individual.dto';
import { FileService } from 'src/helper/file.helper';
import { AffiliateUnitService } from '../affiliate-unit/affiliate-unit.service';
import { ExportFormIndividualDto } from './dto/export-form.dto';
export declare class IndividualService {
    private repo;
    private readonly fileService;
    private affiliateUnitService;
    private dataSource;
    constructor(repo: Repository<Individual>, fileService: FileService, affiliateUnitService: AffiliateUnitService, dataSource: DataSource);
    createOrUpdate(data: Partial<Individual>, user_id?: number): Promise<Individual>;
    findOne(individual_id: string, user?: any): Promise<Individual>;
    find(filter: FilterIndividualDto): Promise<PageDto<Individual>>;
    delete(id: string): Promise<Individual>;
    getIndividualData(individualId: string): Promise<any>;
    saveExportData(individualId: string, exportData: any): Promise<void>;
    getBaseExportData(individualId: string, exportData: ExportFormIndividualDto, userId: number): Promise<any>;
    exportAppraisalReport(individualId: string, exportData: ExportFormIndividualDto, userId: number): Promise<Buffer>;
    exportBankReceipt(individualId: string, exportData: ExportFormIndividualDto, userId: number): Promise<Buffer>;
    exportCashReceipt(individualId: string, exportData: ExportFormIndividualDto, userId: number): Promise<Buffer>;
    exportContract6050(individualId: string, exportData: ExportFormIndividualDto, userId: number): Promise<Buffer>;
    exportContract6060(individualId: string, exportData: ExportFormIndividualDto, userId: number): Promise<Buffer>;
    exportDebitReceipt(individualId: string, exportData: ExportFormIndividualDto, userId: number): Promise<Buffer>;
}
