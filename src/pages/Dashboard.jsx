import React from "react";
import SideBar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";


const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-5 items-center justify-start w-screen h-screen">
        <SideBar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
