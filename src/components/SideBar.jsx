import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosPeople, IoMdPerson } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../features/api/AuthApi";
import Cookies from "js-cookie";

const SideBar = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  // console.log(token);
  const [logout] = useLogoutMutation();
  const logoutHandler = async (token) => {
    const { data } = await logout(token);
    if (data?.success) {
      Cookies.remove("user");
      Cookies.remove("token");
      navigate("/login");
      console.log("logout successfully!");
    }
  };
  return (
    <div className="h-full">
      <div className=" h-full">
        <div className="w-[300px] bg-slate-100 h-full shadow-xl">
          <h3 className="text-center py-5  text-xl text-blue-700">MMS IT</h3>
          <div className="mt-5 flex flex-col items-start  justify-start">
            <NavLink to="/">
              <button className="flex text-slate-600 w-[300px] items-center justify-start px-5 py-2 gap-3">
                <span>
                  <AiOutlineHome />
                </span>
                <span>Dashboard</span>
              </button>
            </NavLink>
            <NavLink to="/team">
              <div className="flex text-slate-600 w-[300px] items-center justify-start px-5  py-2  gap-3">
                <span>
                  <IoIosPeople />
                </span>
                <span>Team</span>
              </div>
            </NavLink>
            <NavLink to="/profile">
              <div className="flex text-slate-600 w-[300px] items-center justify-start px-5  py-2  gap-3">
                <span>
                  <IoMdPerson />
                </span>
                <span>Profile</span>
              </div>
            </NavLink>

            <button
              className="flex text-slate-600 items-center justify-start px-5   py-2  gap-3"
              onClick={() => logoutHandler(token)}
            >
              <span>
                <RiLogoutCircleLine />
              </span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
