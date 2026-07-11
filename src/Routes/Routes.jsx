import MainLayout from "../Layouts/MainLayout";

import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import ErrorPages from "../Pages/ErrorPages";
import All_Apps from "../Pages/All_Apps";
import AppsDetails from "../Pages/AppsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPages />,
    hydrateFallbackElement: <p>Loading........</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: All_Apps,
      },
      {
        path: "/app/:id",
        Component: AppsDetails,
      },
    ],
  },
]);

console.log(router);

export default router;
