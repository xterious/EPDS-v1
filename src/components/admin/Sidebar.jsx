import { AuthState } from "@/atoms/Atoms";
import {
  faCartFlatbed,
  faClipboardList,
  faComment,
  faRightFromBracket,
  faSquarePollHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const Sidebar = () => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(AuthState);

  const getClassName = ({ isActive }) => {
    return `flex items-center justify-between rounded-lg p-2 hover:bg-slate-300 transition-all ease-in duration-150 ${
      isActive && "bg-slate-300"
    }`;
  };

  const logout = () => {
    localStorage.removeItem("token-admin");
    window.location.reload();
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
      <NavLink className={getClassName} to='/admin/feedback'>
        <p>View Feedbacks</p>
        <FontAwesomeIcon icon={faComment} />
      </NavLink>
      <div
        onClick={logout}
        className='flex items-center justify-between rounded-lg p-2 hover:bg-slate-300 transition-all ease-in duration-150 cursor-pointer'>
        <p>Log Out</p>
        <FontAwesomeIcon icon={faRightFromBracket} />
      </div>
    </div>
  );
};

export default Sidebar;
