import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/admin/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
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
