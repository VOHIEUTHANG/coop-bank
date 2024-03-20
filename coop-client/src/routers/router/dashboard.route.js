import DashboardPage from 'pages/Dashboard/DashboardPage';

const dashboardRoute = [
  {
    path: '/',
    exact: true,
    name: 'Báo cáo',
    function: 'DASHBOARD_VIEW',
    component: DashboardPage,
    any: true,
  },
];

export default dashboardRoute;
