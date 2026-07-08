import MainLayout from "../Layouts/MainLayout";

import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);

console.log(router);

export default router;
