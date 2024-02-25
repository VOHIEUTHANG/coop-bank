import { CreateGiftDto } from './create-gift.dto';
declare const UpdateGiftDto_base: import("@nestjs/common").Type<Partial<CreateGiftDto>>;
export declare class UpdateGiftDto extends UpdateGiftDto_base {
    gift_id: string;
}
export {};
