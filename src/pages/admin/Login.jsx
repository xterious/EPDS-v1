import { AuthState } from "@/atoms/Atoms";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const AdminLogin = () => {
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });
  const [authState, setAuthState] = useRecoilState(AuthState);

  const handleChange = (e) => {
    setCreds((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const authenticateAdmin = (e) => {
    e.preventDefault();
    console.log(creds);
    axios
      .post(`${import.meta.env.VITE_APP_API_URL}/auth/loginAdmin`, {
        ...creds,
      })
      .then((res) => {
        localStorage.setItem("token-admin", res.data.token);
        window.location.reload();
      })
      .catch((err) => {
        alert("Invalid Credentials");
        console.log(err);
      });
  };

  if (authState.isAdminLoggedIn) return <Navigate to='/admin' />;

  return (
    <>
      <Header />
      <div className='h-[80.7vh] flex items-center justify-center bg-gradient-to-br from-slate-400 to-slate-50'>
        <form
          className='flex flex-col p-5 space-y-4 w-5/6 lg:w-1/4 bg-white border rounded-lg'
          onSubmit={authenticateAdmin}>
          <h1 className='text-xl font-bold text-slate-700'>Admin Login</h1>
          <input
            name='email'
            className='focus:outline-none p-2 border rounded-md bg-white'
            type='text'
            onChange={handleChange}
            placeholder='Username'
          />
          <input
            name='password'
            className='focus:outline-none p-2 border rounded-md bg-white'
            type='password'
            onChange={handleChange}
            placeholder='Password'
          />
          <button className='p-3 border rounded-md bg-slate-700 text-white'>
            Login
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AdminLogin;
