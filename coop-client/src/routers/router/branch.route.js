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
  },
  {
    path: '/branch/add',
    exact: true,
    name: 'Thêm mới chi nhánh',
    function: 'BRANCH_ADD',
    component: AddPage,
  },
  {
    path: '/branch/detail/:id',
    exact: true,
    name: 'Chi tiết chi nhánh',
    function: 'BRANCH_VIEW',
    component: DetailPage,
  },
  {
    path: '/branch/edit/:id',
    exact: true,
    name: 'Chỉnh sửa chi nhánh',
    function: 'BRANCH_EDIT',
    component: EditPage,
  },
];

export default FunctionGroupRoutes;
