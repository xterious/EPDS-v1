import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () => {
  return (
    <div className="flex flex-col h-svh">
      <Header />
      {/* Main content goes here */}
      <div className="h-[90%] flex justify-center items-center">
        <div className="bg-slate-300 w-[25%] h-[75%]">Hi</div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
