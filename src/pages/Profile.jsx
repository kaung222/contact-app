import React from "react";
import SideBar from "../components/SideBar";
import Cookies from "js-cookie";

const Profile = () => {
  const user = JSON.parse(Cookies.get("user"));
  console.log(user);
  return (
    <div>
      <div className="flex h-screen items-center justify-start">
        <SideBar />
        <div className="">
          <h1 className="">{user.name}</h1>
          <p className="text-sm">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
