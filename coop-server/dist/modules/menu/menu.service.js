"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const common_1 = require("@nestjs/common");
let MenuService = class MenuService {
    async findAll(user) {
        const defaultMenuList = [
            {
                menu_id: '1',
                menu_name: 'BÁO CÁO',
                module_id: null,
                module_name: null,
                link_menu: '/',
                icon_path: 'ti-bar-chart',
                parent_id: '0',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '0',
                description: null,
                function_name: null
            },
            {
                menu_id: '10',
                menu_name: 'NGƯỜI ĐẠI DIỆN',
                module_id: null,
                module_name: null,
                link_menu: '/representative',
                icon_path: 'ti-user',
                parent_id: '0',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '11',
                description: null,
                function_name: null
            },
            {
                menu_id: '3',
                menu_name: 'ĐƠN VỊ LIÊN KẾT',
                module_id: null,
                module_name: null,
                link_menu: '/affiliate-unit',
                icon_path: 'ti-id-badge',
                parent_id: '0',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '7',
                description: null,
                function_name: null
            },
            {
                menu_id: '4',
                menu_name: 'CÁ NHÂN VAY VỐN',
                module_id: null,
                module_name: null,
                link_menu: '/individual',
                icon_path: 'ti-user',
                parent_id: '0',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '7',
                description: null,
                function_name: null
            },
            {
                menu_id: '20',
                menu_name: 'CHĂM SÓC KH',
                module_id: null,
                module_name: null,
                link_menu: '/customer-care',
                icon_path: 'ti-gift',
                parent_id: '0',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '7',
                description: null,
                function_name: null
            },
            {
                menu_id: '21',
                menu_name: 'Quà tặng',
                module_id: null,
                module_name: null,
                link_menu: '/gift',
                parent_id: '20',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '7',
                description: null,
                function_name: null
            },
            {
                menu_id: '22',
                menu_name: 'Ngày đặc biệt',
                module_id: null,
                module_name: null,
                link_menu: '/special-day',
                parent_id: '20',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '7',
                description: null,
                function_name: null
            }
        ];
        const adminMenus = [
            {
                menu_id: '5',
                menu_name: 'HỆ THỐNG',
                module_id: null,
                module_name: null,
                link_menu: '#',
                icon_path: 'ti-settings',
                parent_id: '0',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '100',
                description: null,
                function_name: null
            },
            {
                menu_id: '2',
                menu_name: 'Chi nhánh',
                module_id: null,
                module_name: null,
                link_menu: '/branch',
                parent_id: '5',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '10',
                description: null,
                function_name: null
            },
            {
                menu_id: '99',
                menu_name: 'Phòng giao dịch',
                module_id: null,
                module_name: null,
                link_menu: '/transaction-room',
                parent_id: '5',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '10',
                description: null,
                function_name: null
            },
            {
                menu_id: '7',
                menu_name: 'Đại diện',
                module_id: null,
                module_name: null,
                link_menu: '/bank-representative',
                parent_id: '5',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '11',
                description: null,
                function_name: null
            },
            {
                menu_id: '6',
                menu_name: 'Nhân viên',
                module_id: null,
                module_name: null,
                link_menu: '/user',
                parent_id: '5',
                is_active: 1,
                is_system: 0,
                is_business: 0,
                order_index: '11',
                description: null,
                function_name: null
            }
        ];
        return user.is_admin ? defaultMenuList.concat(adminMenus) : defaultMenuList;
    }
};
exports.MenuService = MenuService;
exports.MenuService = MenuService = __decorate([
    (0, common_1.Injectable)()
], MenuService);
//# sourceMappingURL=menu.service.js.map