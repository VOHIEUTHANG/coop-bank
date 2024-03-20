import { Permissoin } from 'pages/Individual/utils/constants';
import React from 'react';

const DefaultPage = React.lazy(() => import('pages/Contract/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/Contract/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/Contract/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/Contract/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/contract',
    exact: true,
    name: 'Danh sách hồ sơ vay vốn',
    function: Permissoin.VIEW,
    component: DefaultPage,
    any: true,
  },
  {
    path: '/contract/add',
    exact: true,
    name: 'Thêm mới hồ sơ vay vốn',
    function: Permissoin.ADD,
    component: AddPage,
    any: true,
  },
  {
    path: '/contract/detail/:id',
    exact: true,
    name: 'Chi tiết hồ sơ vay vốn',
    function: Permissoin.VIEW,
    component: DetailPage,
    any: true,
  },
  {
    path: '/contract/edit/:id',
    exact: true,
    name: 'Chỉnh sửa hồ sơ vay vốn',
    function: Permissoin.EDIT,
    component: EditPage,
    any: true,
  },
];

export default FunctionGroupRoutes;
