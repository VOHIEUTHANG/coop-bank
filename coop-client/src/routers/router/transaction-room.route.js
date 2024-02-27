import React from 'react';

const DefaultPage = React.lazy(() => import('pages/TransactionRoom/pages/DefaultPage'));
const AddPage = React.lazy(() => import('pages/TransactionRoom/pages/AddPage'));
const DetailPage = React.lazy(() => import('pages/TransactionRoom/pages/DetailPage'));
const EditPage = React.lazy(() => import('pages/TransactionRoom/pages/EditPage'));

const FunctionGroupRoutes = [
  {
    path: '/transaction-room',
    exact: true,
    name: 'Danh sách phòng giao dịch',
    function: 'TRANSACTION_ROOM_VIEW',
    component: DefaultPage,
    any: true,
  },
  {
    path: '/transaction-room/add',
    exact: true,
    name: 'Thêm mới phòng giao dịch',
    function: 'TRANSACTION_ROOM_ADD',
    component: AddPage,
    any: true,
  },
  {
    path: '/transaction-room/detail/:id',
    exact: true,
    name: 'Chi tiết phòng giao dịch',
    function: 'TRANSACTION_ROOM_VIEW',
    component: DetailPage,
    any: true,
  },
  {
    path: '/transaction-room/edit/:id',
    exact: true,
    name: 'Chỉnh sửa phòng giao dịch',
    function: 'TRANSACTION_ROOM_EDIT',
    component: EditPage,
    any: true,
  },
];

export default FunctionGroupRoutes;
