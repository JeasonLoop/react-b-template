/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import App from "../App";
import LoginPage from "../layout/components/Login";
import { createBrowserRouter } from "react-router-dom";

const HomePage = lazy(() => import("../pages/Home/index"));
const DataPanelPage = lazy(() => import("../pages/DataPanel/index"));
const SettingPage = lazy(() => import("../pages/Setting/index"));

const routes = [
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/data",
        element: <DataPanelPage />,
      },
      {
        path: "/setting",
        element: <SettingPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export { routes }

export default createBrowserRouter(routes);
