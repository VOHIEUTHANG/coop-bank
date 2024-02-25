import { MenuService } from './menu.service';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    findAll(req: any): Promise<({
        menu_id: string;
        menu_name: string;
        module_id: any;
        module_name: any;
        link_menu: string;
        icon_path: string;
        parent_id: string;
        is_active: number;
        is_system: number;
        is_business: number;
        order_index: string;
        description: any;
        function_name: any;
    } | {
        menu_id: string;
        menu_name: string;
        module_id: any;
        module_name: any;
        link_menu: string;
        parent_id: string;
        is_active: number;
        is_system: number;
        is_business: number;
        order_index: string;
        description: any;
        function_name: any;
        icon_path?: undefined;
    })[]>;
}
