import React from 'react';

const DefaultPage = React.lazy(() => import('pages/AffiliateUnit/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/AffiliateUnit/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/AffiliateUnit/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/AffiliateUnit/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/affiliate-unit',
    exact: true,
    name: 'Danh sách đơn vị liên kết',
    component: DefaultPage,
    any: true,
  },
  {
    path: '/affiliate-unit/add',
    exact: true,
    name: 'Thêm mới đơn vị liên kết',
    component: AddPage,
    any: true,
  },
  {
    path: '/affiliate-unit/detail/:id',
    exact: true,
    name: 'Chi tiết đơn vị liên kết',
    component: DetailPage,
    any: true,
  },
  {
    path: '/affiliate-unit/edit/:id',
    exact: true,
    name: 'Chỉnh sửa đơn vị liên kết',
    component: EditPage,
    any: true,
  },
];

export default FunctionGroupRoutes;
