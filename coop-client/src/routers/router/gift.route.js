import { Permission } from 'pages/Gift/utils/constants';
import React from 'react';

const DefaultPage = React.lazy(() => import('pages/Gift/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/Gift/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/Gift/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/Gift/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/gift',
    exact: true,
    name: 'Danh sách quà tặng',
    function: Permission.VIEW,
    component: DefaultPage,
    any: true,
  },
  {
    path: '/gift/add',
    exact: true,
    name: 'Thêm mới quà tặng',
    function: Permission.ADD,
    component: AddPage,
    any: true,
  },
  {
    path: '/gift/detail/:id',
    exact: true,
    name: 'Chi tiết quà tặng',
    function: Permission.VIEW,
    component: DetailPage,
    any: true,
  },
  {
    path: '/gift/edit/:id',
    exact: true,
    name: 'Chỉnh sửa quà tặng',
    function: Permission.EDIT,
    component: EditPage,
    any: true,
  },
];

export default FunctionGroupRoutes;
