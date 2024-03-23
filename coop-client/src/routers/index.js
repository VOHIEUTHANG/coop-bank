import Page404 from 'pages/PageError/Page404';
import userRoute from './router/user.route';
import dashboardRoute from './router/dashboard.route';
import bankRepresentativeRoute from './router/bank-representative.route';
import representativeRoute from './router/representative.route';
import affiliateUnitRoute from './router/affiliate-unit.route';
import individualRoute from './router/individual.route';
import giftRoute from './router/gift.route';
import specialDayRoute from './router/special-day.route';
import branchRoute from './router/branch.route';
import transactionRoute from './router/transaction-room.route';
import contractRoute from './router/contract.route';
import documentRoute from './router/document.route';

const notFoundPages = [
  {
    path: '/404',
    exact: true,
    name: 'Trang không tồn tại',
    component: Page404,
  },
];

const routes = [
  ...notFoundPages,
  ...userRoute,
  ...dashboardRoute,
  ...branchRoute,
  ...bankRepresentativeRoute,
  ...representativeRoute,
  ...affiliateUnitRoute,
  ...individualRoute,
  ...giftRoute,
  ...specialDayRoute,
  ...transactionRoute,
  ...contractRoute,
  ...documentRoute,
];

export default routes;
