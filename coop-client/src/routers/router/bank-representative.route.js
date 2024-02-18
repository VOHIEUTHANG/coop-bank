import { Permissoin } from 'pages/BankRepresentative/utils/constants';
import React from 'react';

const DefaultPage = React.lazy(() => import('pages/BankRepresentative/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/BankRepresentative/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/BankRepresentative/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/BankRepresentative/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/bank-representative',
    exact: true,
    name: 'Danh sách người đại diện ngân hàng',
    function: Permissoin.VIEW,
    component: DefaultPage,
  },
  {
    path: '/bank-representative/add',
    exact: true,
    name: 'Thêm mới người đại diện ngân hàng',
    function: Permissoin.ADD,
    component: AddPage,
  },
  {
    path: '/bank-representative/detail/:id',
    exact: true,
    name: 'Chi tiết người đại diện ngân hàng',
    function: Permissoin.VIEW,
    component: DetailPage,
  },
  {
    path: '/bank-representative/edit/:id',
    exact: true,
    name: 'Chỉnh sửa người đại diện ngân hàng',
    function: Permissoin.EDIT,
    component: EditPage,
  },
];

export default FunctionGroupRoutes;
