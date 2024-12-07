import React from "react";
import { overviewDetails } from "../Info/Info";

const Overview = () => {
  return (
    <main className="h-[33vh] w-[calc(100vw-18rem)] bg-white border border-slate-200 rounded-md p-4 gap-2 flex items-center flex-col">
      <div className="flex justify-between items-center w-full h-1/2">
        <div className="flex items-start gap-6">
          <div>
            <img
              src="/profilePic.webp"
              alt="profile-pic"
              className="h-[10vh] rounded-full"
              style={{ width: "10vh", height: "10vh" }}
            />
            <figure className="rounded-full w-[1vw] h-[1vw] relative left-12 bg-green-500 bottom-4"></figure>
          </div>
          <div className="flex flex-col justify-between h-full gap-3">
            <h2 className="font-semibold text-3xl text-[#0F172A]">Rebbecca</h2>
            <span className="text-slate-600 text-sm">
              rebbecca@fluidesigns.in
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end h-full gap-3">
          <div className="flex items-center gap-4">
            <button className="bg-white rounded-md w-auto py-2 px-4 font-medium border text-sm text-black transition-all duration-150 ease-in-out active:bg-gray-100">
              Apply Leave
            </button>
            <button className="bg-black text-white rounded-md py-2 px-4 font-medium text-sm transition-all duration-150 ease-in-out active:bg-gray-700">
              Selfie Clock In
            </button>
          </div>

          <div className="font-bold text-xl text-black ">
            <p>00:00:00</p>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-slate-200 my-2" />
      <div className="h-1/2 w-full flex">
        {Object.entries(overviewDetails).map(([key, value], idx) => {
          return (
            <div
              key={idx}
              className={`flex flex-col w-1/5 h-full justify-between ${
                idx !== Object.entries(overviewDetails).length - 1
                  ? "border-r"
                  : ""
              }  border-slate-200 p-2 text-black`}
            >
              <span>{key}</span>
              <span className="font-semibold text-[3vh]">{value}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Overview;
