import { PageOptionsDto } from 'src/common/dto/page-options.dto';
export declare class FilterGiftDto extends PageOptionsDto {
    search: string;
    created_date_from: string;
    created_date_to: string;
}