import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Colleges from "../pages/Colleges";
import Compare from "../pages/Compare";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/colleges",
    element: <Colleges />,
  },
  {
    path: "/compare",
    element: <Compare />,
  },
]);