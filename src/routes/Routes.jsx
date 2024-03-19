import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/client/Home";
import Login from "../pages/client/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
