import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Frame from "./Frame";

const MainLayout = () => {
  return (
    <div>  
      <div className="flex">
        <SideBar />
        <Frame>
          <Outlet />
        </Frame>
      </div>
    </div>
  );
};

export default MainLayout;
