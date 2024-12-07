import React from "react";
import { Outlet } from "react-router-dom";

const Frame = () => {
  return (
    <main className="min-w-0 flex-1 overflow-y-auto bg-gray-100 thin-scrollbar"><Outlet/></main>
  );
};

export default Frame;
