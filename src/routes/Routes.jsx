import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/client/Home";
import Login from "@/pages/client/Login";
import Client from "@/layout/Client";
import Products from "@/pages/client/Products";
import Orders from "@/pages/client/Orders";
import Shops from "@/pages/client/Shops";
import Admin from "@/layout/Admin";
import AdminHome from "@/pages/admin/Home";
import AdminOrders from "@/pages/admin/Orders";
import AdminFeedback from "@/pages/admin/Feedback";
import Feedback from "@/pages/client/Feedback";
import AdminLogin from "@/pages/admin/Login";
import AdminProducts from "@/pages/admin/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "shops",
        element: <Shops />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "orders",
        element: <AdminOrders />,
      },
      {
        path: "products",
        element: <AdminProducts />,
      },
      {
        path: "feedback",
        element: <AdminFeedback />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "*",
    element: <Navigate to='/' />,
  },
]);

export default router;
