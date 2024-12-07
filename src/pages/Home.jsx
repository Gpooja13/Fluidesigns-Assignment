import React from "react";
import Overview from "../components/Overview";
import LeavesRecord from "../components/LeavesRecord";
import Holidays from "../components/Holidays";

export default function Home() {
  return (
    <div className="text-gray-600 body-font flex flex-col m-4 gap-4 overflow-hidden">
      <Overview />
      <div className="flex items-center gap-4 overflow-hidden">
        <LeavesRecord />
        <Holidays/>
      </div>
    </div>
  );
}
