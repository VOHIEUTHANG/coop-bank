import DashboardPage from 'pages/Dashboard/DashboardPage';

const dashboardRoute = [
  {
    path: '/report',
    exact: true,
    name: 'Báo cáo',
    function: 'DASHBOARD_VIEW',
    component: DashboardPage,
    any: true,
  },
];

export default dashboardRoute;
