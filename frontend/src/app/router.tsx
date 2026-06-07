import {
  createBrowserRouter,
} from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import Home from "../pages/Home";
import Colleges from "../pages/Colleges";
import CollegeDetail from "../pages/CollegesDetail";
import Compare from "../pages/compare.tsx";
import Login from "../pages/Login";
import Signup from "../pages/Signup.tsx";
import Saved from "../pages/Saved";

export const router =
  createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },

    {
      path: "/colleges",
      element: <Colleges />,
    },

    {
      path: "/college/:id",
      element: <CollegeDetail />,
    },

    {
      path: "/compare",
      element: <Compare />,
    },
    {
      path: "/profile/saved",
      element: (
        <ProtectedRoute>
          <Saved />
        </ProtectedRoute>
      ),
    },
  ]);