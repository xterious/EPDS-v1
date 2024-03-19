import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { useRecoilState } from "recoil";
import { AuthState } from "./atoms/Atoms";
import { useEffect } from "react";
import Loader from "./components/Loader";

const App = () => {
  const [authState, setAuthState] = useRecoilState(AuthState);

  const checkAuthState = () => {
    const adminToken = localStorage.getItem("token-admin");
    const clientToken = localStorage.getItem("token-client");
    setAuthState({
      isClientLoggedIn: clientToken && clientToken,
      isAdminLoggedIn: adminToken && adminToken,
      isLoading: false,
    });
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  if (authState.isLoading) return <Loader />;

  return <RouterProvider router={router} />;
};

export default App;
