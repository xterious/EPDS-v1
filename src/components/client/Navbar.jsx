import {
  faBars,
  faClipboardList,
  faHouse,
  faMapLocationDot,
  faRightFromBracket,
  faShop,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const logout = () => {
    localStorage.removeItem("token-client");
    window.location.reload();
  };

  return (
    <div className='bg-amber-900 p-4 text-white flex flex-col lg:flex-row lg:items-center gap-4'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-3 lg:place-self-center'>
          <img
            src={"/tngovt.png"}
            alt='tn-govt-logo'
            className='h-12 md:h-20 place-self-center'
          />
          <div className='flex flex-col text-white place-self-center'>
            <p className='text-xs hidden lg:block lg:text-md'>
              OFFICIAL WEBSITE OF CIVIL SUPPLIES AND CONSUMER PROTECTION
              DEPARTMENT, GOVERNMENT OF TAMILNADU
            </p>
            <p className='text-sm font-bold lg:text-lg'>
              E-PUBLIC DISTRIBUTION SYSTEM
            </p>
          </div>
        </div>
        <FontAwesomeIcon
          onClick={toggleOpen}
          className='lg:hidden text-xl'
          icon={open ? faXmark : faBars}
        />
      </div>
      <div className='hidden lg:flex items-center justify-end gap-10 w-[70%] font-semibold'>
        <Link className='flex items-center gap-3' to='/'>
          <p>Home</p>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link className='flex items-center gap-3' to='/products'>
          <p>Products</p>
          <FontAwesomeIcon icon={faShop} />
        </Link>
        <Link className='flex items-center gap-3' to='/orders'>
          <p>Orders</p>
          <FontAwesomeIcon icon={faClipboardList} />
        </Link>
        <Link className='flex items-center gap-3' to='/shops'>
          <p>Shops</p>
          <FontAwesomeIcon icon={faMapLocationDot} />
        </Link>
        <div
          onClick={logout}
          className='flex items-center gap-3 cursor-pointer'>
          <p>Log Out</p>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
      </div>
      {/* Hamburger Menu Options */}
      <div
        className={`lg:hidden flex flex-col items-center justify-end gap-3 font-semibold transition-all ease-in duration-300 ${
          open ? "block" : "hidden"
        } `}>
        <Link className='flex items-center justify-between w-full' to='/'>
          <p>Home</p>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
        <Link
          className='flex items-center justify-between w-full'
          to='/products'>
          <p>Products</p>
          <FontAwesomeIcon icon={faShop} />
        </Link>
        <Link className='flex items-center justify-between w-full' to='/orders'>
          <p>Orders</p>
          <FontAwesomeIcon icon={faClipboardList} />
        </Link>
        <Link className='flex items-center justify-between w-full' to='/shops'>
          <p>Shops</p>
          <FontAwesomeIcon icon={faMapLocationDot} />
        </Link>
        <div
          onClick={logout}
          className='flex items-center justify-between w-full'>
          <p>Log Out</p>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
