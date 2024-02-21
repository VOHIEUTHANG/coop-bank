import React from 'react';

const DefaultPage = React.lazy(() => import('pages/User/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/User/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/User/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/User/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/user',
    exact: true,
    name: 'Danh sách nhân viên',
    function: 'USER_VIEW',
    component: DefaultPage,
  },
  {
    path: '/user/add',
    exact: true,
    name: 'Thêm mới nhân viên',
    function: 'USER_ADD',
    component: AddPage,
  },
  {
    path: '/user/detail/:id',
    exact: true,
    name: 'Chi tiết nhân viên',
    function: 'USER_VIEW',
    component: DetailPage,
  },
  {
    path: '/user/edit/:id',
    exact: true,
    name: 'Chỉnh sửa nhân viên',
    function: 'USER_EDIT',
    component: EditPage,
  },
];

export default FunctionGroupRoutes;
