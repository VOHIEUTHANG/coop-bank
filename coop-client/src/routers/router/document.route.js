import React from 'react';

const DefaultPage = React.lazy(() => import('pages/Document/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/Document/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/Document/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/Document/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/document',
    exact: true,
    name: 'Danh sách nhóm tài liệu',
    component: DefaultPage,
    any: true,
  },
  {
    path: '/document/add',
    exact: true,
    name: 'Thêm mới nhóm tài liệu',
    component: AddPage,
    any: true,
  },
  {
    path: '/document/detail/:id',
    exact: true,
    name: 'Chi tiết nhóm tài liệu',
    component: DetailPage,
    any: true,
  },
  {
    path: '/document/edit/:id',
    exact: true,
    name: 'Chỉnh sửa nhóm tài liệu',
    component: EditPage,
    any: true,
  },
];

export default FunctionGroupRoutes;
