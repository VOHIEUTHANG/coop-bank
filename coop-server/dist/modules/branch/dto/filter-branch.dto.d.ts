import { PageOptionsDto } from 'src/common/dto/page-options.dto';
export declare class FilterBranchDto extends PageOptionsDto {
    search: string;
    email: string;
    created_date_from: string;
    created_date_to: string;
}
