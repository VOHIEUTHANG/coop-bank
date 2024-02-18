import { Permission } from 'pages/Gift/utils/constants';
import React from 'react';

const DefaultPage = React.lazy(() => import('pages/SpecialDay/pages/DefaultPage'));

const FunctionGroupRoutes = [
  {
    path: '/special-day',
    exact: true,
    name: 'Danh sách ngày đặc biệt',
    function: Permission.VIEW,
    component: DefaultPage,
  },
];

export default FunctionGroupRoutes;
