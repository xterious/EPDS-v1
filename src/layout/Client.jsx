import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet } from "react-router";

const Client = () => {
  return (
    <>
      <Header />
      <div className='min-h-[80vh]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Client;
