import {
  faCartFlatbed,
  faClipboardList,
  faRightFromBracket,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const getClassName = ({ isActive }) => {
    return `flex items-center justify-between rounded-lg p-2 hover:bg-slate-300 transition-all ease-in duration-150 ${
      isActive && "bg-slate-300"
    }`;
  };
  return (
    <div className='w-1/6 h-[80.7vh] p-2 text-slate-800 space-y-2'>
      <NavLink end className={getClassName} to='/admin/'>
        <p>My Dashboard</p>
        <FontAwesomeIcon icon={faSquarePollHorizontal} />
      </NavLink>
      <NavLink className={getClassName} to='/admin/orders'>
        <p>View Orders</p>
        <FontAwesomeIcon icon={faClipboardList} />
      </NavLink>
      <NavLink className={getClassName} to='/admin/products'>
        <p>Manage Products</p>
        <FontAwesomeIcon icon={faCartFlatbed} />
      </NavLink>
      <NavLink className={getClassName} to='/admin/login'>
        <p>Log Out</p>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </NavLink>
    </div>
  );
};

export default Sidebar;
