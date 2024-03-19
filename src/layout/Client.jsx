import { AuthState } from "@/atoms/Atoms";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const Client = () => {
  const authState = useRecoilValue(AuthState);

  if (!authState.isClientLoggedIn) return <Navigate to='/login' />;

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Client;
