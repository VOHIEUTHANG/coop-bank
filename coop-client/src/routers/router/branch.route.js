import React from 'react';

const DefaultPage = React.lazy(() => import('pages/Branch/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/Branch/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/Branch/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/Branch/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/branch',
    exact: true,
    name: 'Danh sách chi nhánh',
    function: 'BRANCH_VIEW',
    component: DefaultPage,
    any: true,
  },
  {
    path: '/branch/add',
    exact: true,
    name: 'Thêm mới chi nhánh',
    function: 'BRANCH_ADD',
    component: AddPage,
    any: true,
  },
  {
    path: '/branch/detail/:id',
    exact: true,
    name: 'Chi tiết chi nhánh',
    function: 'BRANCH_VIEW',
    component: DetailPage,
    any: true,
  },
  {
    path: '/branch/edit/:id',
    exact: true,
    name: 'Chỉnh sửa chi nhánh',
    function: 'BRANCH_EDIT',
    component: EditPage,
    any: true,
  },
];

export default FunctionGroupRoutes;
