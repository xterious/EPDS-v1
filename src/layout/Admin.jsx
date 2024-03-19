import { AuthState } from "@/atoms/Atoms";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";

const Admin = () => {
  const authState = useRecoilValue(AuthState);

  if (!authState.isAdminLoggedIn) return <Navigate to='/admin/login' />;

  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='bg-slate-300 w-full'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
