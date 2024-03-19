import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Download from "@/components/home/Download";
import React from "react";
import { Outlet } from "react-router";

const Client = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Download />
      <Footer />
    </>
  );
};

export default Client;
