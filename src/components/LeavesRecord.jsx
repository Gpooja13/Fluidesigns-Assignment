import React, { useState } from "react";
import { leaveLog, attendanceLog } from "../Info/Info";

const LeavesRecord = () => {
  const [selected, setSelected] = useState("LeaveLog");

  const renderTableContent = () => {
    if (selected === "LeaveLog") {
      return leaveLog.map((log, index) => (
        <tr
          key={index}
          className={`${
            index % 2 === 1
              ? "bg-slate-50 border-y border-slate-200"
              : "bg-white"
          } text-center align-middle`}
        >
          <td className="p-4">{log.leaveType}</td>
          <td className="p-4">{log.from}</td>
          <td className="p-4">{log.to}</td>
          <td className="p-4">{log.days}</td>
          <td className="p-4">{log.reason}</td>
          <td
            className={`p-4 ${
              log.status === "Approved"
                ? "text-green-500"
                : log.status === "Pending"
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          >
            {log.status}
          </td>
        </tr>
      ));
    } else if (selected === "AttendanceLog") {
      return attendanceLog.map((log, index) => (
        <tr
          key={index}
          className={`${
            index % 2 === 1
              ? "bg-slate-50 border-y border-slate-200"
              : "bg-white"
          } text-center align-middle`}
        >
          <td className="p-4">{log.date}</td>
          <td className="p-4">{log.checkIn}</td>
          <td className="p-4">{log.checkOut}</td>
          <td className="p-4">{log.hoursWorked}</td>
          <td
            className={`p-4 ${
              log.status === "Present"
                ? "text-green-500"
                : log.status === "Absent"
                ? "text-red-500"
                : "text-yellow-500"
            }`}
          >
            {log.status}
          </td>
        </tr>
      ));
    }
  };

  return (
    <div className="w-[59vw] h-[59.5vh] flex flex-col bg-white border border-slate-200 rounded-md p-4 gap-2">
      <div className="p-1 w-72 flex items-center gap-1 bg-slate-100 rounded-md text-sm font-medium">
        <button
          className={`px-3 py-2 w-36 rounded-md ${
            selected === "AttendanceLog"
              ? "bg-white text-black"
              : "bg-slate-100 text-gray-800"
          }`}
          onClick={() => setSelected("AttendanceLog")}
        >
          Attendance Log
        </button>
        <button
          className={`px-3 py-2 w-36 rounded-md ${
            selected === "LeaveLog"
              ? "bg-white text-black"
              : "bg-slate-100 text-gray-800"
          }`}
          onClick={() => setSelected("LeaveLog")}
        >
          Leave Log
        </button>
      </div>

      <div className="bg-slate-100 border border-slate-200 rounded-md max-h-80 overflow-y-auto thin-scrollbar">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-slate-100 text-black z-10">
            <tr>
              {selected === "LeaveLog" ? (
                <>
                  <th className="w-1/6 px-4 py-2 rounded-tl-md">Leave Type</th>
                  <th className="w-1/6 px-4 py-2">From</th>
                  <th className="w-1/6 px-4 py-2">To</th>
                  <th className="w-1/6 px-4 py-2">Days</th>
                  <th className="w-1/6 px-4 py-2">Reason</th>
                  <th className="w-1/6 px-4 py-2 rounded-tr-md">Status</th>
                </>
              ) : (
                <>
                  <th className="w-1/6 px-4 py-2 rounded-tl-md">Date</th>
                  <th className="w-1/6 px-4 py-2">Check-In</th>
                  <th className="w-1/6 px-4 py-2">Check-Out</th>
                  <th className="w-1/6 px-4 py-2">Hours Worked</th>
                  <th className="w-1/6 px-4 py-2 rounded-tr-md">Status</th>
                </>
              )}
            </tr>
          </thead>
          <tbody className="text-black">{renderTableContent()}</tbody>
        </table>
      </div>

      <div className="text-black underline underline-offset-4 text-center text-sm cursor-pointer mt-2">
        View More
      </div>
    </div>
  );
};

export default LeavesRecord;
