import NotFound from "pages/Common/NotFound";
import History from "pages/History";
import Home from "pages/Home";
import Data from "pages/Data";
import Model from "pages/Model";
import UnAuthorized from "pages/Common/UnAuthorized";

const routes = [
  {
    path: "/404",
    element: NotFound,
    noLayout: true
  },
  {
    path: "/403",
    element: UnAuthorized,
    noLayout: true
  },
  {
    path: "/",
    element: Home
  },
  {
    path: "/history",
    element: History
  },
  {
    path: "/data",
    element: Data
  },
  {
    path: "/model",
    element: Model
  }
];

export default routes;
