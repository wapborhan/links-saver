import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import HomePage from "../pages/home/HomePage";
import About from "../pages/about/About";
import NotFound from "../layout/NotFound/NotFound";
import Dash from "../layout/Dash";
import SIgnIn from "../layout/SIgnIn";
import SIgnUp from "../layout/SIgnUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SIgnIn />,
      },
      {
        path: "/signup",
        element: <SIgnUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dash />,
    errorElement: <NotFound />,
    children: [
      {
        path: "profile",
        element: "Kl",
      },
    ],
  },
]);
export default router;
