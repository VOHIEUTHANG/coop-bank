import { Permissoin } from 'pages/Representative/utils/constants';
import React from 'react';

const DefaultPage = React.lazy(() => import('pages/Representative/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/Representative/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/Representative/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/Representative/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/representative',
    exact: true,
    name: 'Danh sách người đại diện',
    function: Permissoin.VIEW,
    component: DefaultPage,
    any: true,
  },
  {
    path: '/representative/add',
    exact: true,
    name: 'Thêm mới người đại diện',
    function: Permissoin.ADD,
    component: AddPage,
    any: true,
  },
  {
    path: '/representative/detail/:id',
    exact: true,
    name: 'Chi tiết người đại diện',
    function: Permissoin.VIEW,
    component: DetailPage,
    any: true,
  },
  {
    path: '/representative/edit/:id',
    exact: true,
    name: 'Chỉnh sửa người đại diện',
    function: Permissoin.EDIT,
    component: EditPage,
    any: true,
  },
];

export default FunctionGroupRoutes;
