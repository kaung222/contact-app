import React from "react";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

const Team = () => {
  return (
    <div>
      <div className="flex gap-5 items-center justify-center w-screen h-screen">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};

export default Team;
