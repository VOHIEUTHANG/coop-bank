import { PageOptionsDto } from 'src/common/dto/page-options.dto';
export declare class FilterIndividualDto extends PageOptionsDto {
    search: string;
    created_date_from: string;
    created_date_to: string;
}
