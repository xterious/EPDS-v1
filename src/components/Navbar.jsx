import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/819px-TamilNadu_Logo.svg.png";

  return (
    <div className='bg-amber-900 p-4 text-white flex items-center gap-4'>
      <div className='flex space-x-3 place-self-center'>
        <img
          src={logo}
          alt='tn-govt-logo'
          className='h-12 md:h-20 place-self-center'
        />
        <div className='flex flex-col text-white place-self-center'>
          <p className='text-xs lg:text-md'>
            OFFICIAL WEBSITE OF CIVIL SUPPLIES AND CONSUMER PROTECTION
            DEPARTMENT, GOVERNMENT OF TAMILNADU
          </p>
          <p className='text-sm font-bold lg:text-lg'>
            E-PUBLIC DISTRIBUTION SYSTEM
          </p>
        </div>
      </div>
      <div className='flex items-center justify-end gap-10 w-[70%]'>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/stocks'>Stocks</Link>
        <Link to='/shops'>Shops</Link>
        <Link to='/login'>Log Out</Link>
      </div>
    </div>
  );
};

export default Navbar;
