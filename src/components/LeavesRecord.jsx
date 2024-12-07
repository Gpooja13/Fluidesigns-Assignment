import React, { useState } from "react";
import { leaveLog, attendanceLog } from "../Info/Info";

const LeavesRecord = () => {
  const [selected, setSelected] = useState("LeaveLog");
  const [showAll, setShowAll] = useState(false);

  // Number of logs to display initially
  const initialCount = 5;

  // Determine which log list to show
  const getLogsToDisplay = () => {
    const logs = selected === "LeaveLog" ? leaveLog : attendanceLog;
    return showAll ? logs : logs.slice(0, initialCount);
  };

  const renderTableContent = () => {
    const logsToDisplay = getLogsToDisplay();

    if (selected === "LeaveLog") {
      return logsToDisplay.map((log, index) => (
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
      return logsToDisplay.map((log, index) => (
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

  const handleViewMore = () => setShowAll(!showAll);

  return (
    <div className="w-[calc(100vw-16rem)] h-[calc(100vh-41vh)] flex flex-col bg-white border border-slate-200 rounded-md p-4 gap-2">
      {/* Toggle Buttons */}
      <div className="p-1 w-72 flex items-center gap-1 bg-slate-100 rounded-md text-sm font-medium">
        <button
          className={`px-3 py-2 w-36 rounded-md ${
            selected === "AttendanceLog"
              ? "bg-white text-black"
              : "bg-slate-100 text-gray-800"
          }`}
          onClick={() => {
            setSelected("AttendanceLog");
            setShowAll(false); // Reset view state when switching logs
          }}
        >
          Attendance Log
        </button>
        <button
          className={`px-3 py-2 w-36 rounded-md ${
            selected === "LeaveLog"
              ? "bg-white text-black"
              : "bg-slate-100 text-gray-800"
          }`}
          onClick={() => {
            setSelected("LeaveLog");
            setShowAll(false); // Reset view state when switching logs
          }}
        >
          Leave Log
        </button>
      </div>

      {/* Log Table */}
      <div className="bg-slate-100 border border-slate-200 rounded-md max-h-[44vh] overflow-y-auto thin-scrollbar">
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

      {/* View More */}
      <div
        className="text-black underline underline-offset-4 text-center text-sm cursor-pointer m-auto"
        onClick={handleViewMore}
      >
        {showAll ? "View Less" : "View More"}
      </div>
    </div>
  );
};

export default LeavesRecord;
