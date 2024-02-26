import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Cart from "../pages/menu/Cart";
import Login from "../components/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
       {
        path: "/",
        element: <Home />,
       },
       {
        path: "/menu",
        element: <PrivateRouter><Menu /></PrivateRouter>,
       },
       {
        path: "/cart",
        element: <Cart />,
       },
       {
        path: "/update-profile",
        element: <UpdateProfile />,
       }
      ],
    },
    {
      path: "/signup",
      element: <Signup />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: '',
          element: <Dashboard />
        },
        {
          path: 'users',
          element: <Users />
        }
      ]
    },
  ]);

  export default router;