import Locations from "@/components/client/Locations";
import Navbar from "@/components/client/Navbar";
import React from "react";

const Shops = () => {
  return (
    <>
      <Navbar />
      <div className='p-4'>
        <Locations />
      </div>
    </>
  );
};

export default Shops;
