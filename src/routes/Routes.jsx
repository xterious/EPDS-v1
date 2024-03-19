import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "@/pages/client/Home";
import Login from "@/pages/client/Login";
import Client from "../layout/Client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Client />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to='/' />,
  },
]);

export default router;
