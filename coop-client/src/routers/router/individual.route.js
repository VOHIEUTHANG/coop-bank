import { Permissoin } from 'pages/Individual/utils/constants';
import React from 'react';

const DefaultPage = React.lazy(() => import('pages/Individual/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/Individual/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/Individual/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/Individual/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/individual',
    exact: true,
    name: 'Danh sách cá nhân vay vốn',
    function: Permissoin.VIEW,
    component: DefaultPage,
    any: true,
  },
  {
    path: '/individual/add',
    exact: true,
    name: 'Thêm mới cá nhân vay vốn',
    function: Permissoin.ADD,
    component: AddPage,
    any: true,
  },
  {
    path: '/individual/detail/:id',
    exact: true,
    name: 'Chi tiết cá nhân vay vốn',
    function: Permissoin.VIEW,
    component: DetailPage,
    any: true,
  },
  {
    path: '/individual/edit/:id',
    exact: true,
    name: 'Chỉnh sửa cá nhân vay vốn',
    function: Permissoin.EDIT,
    component: EditPage,
    any: true,
  },
];

export default FunctionGroupRoutes;
