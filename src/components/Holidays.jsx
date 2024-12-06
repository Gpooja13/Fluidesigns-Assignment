import React, { useState } from "react";
import { Calendar } from "./ui/calendar";

const Holidays = () => {
  const [date, setDate] = useState(new Date());

  return (
    <aside className="w-[19vw] h-[59.5vh] gap-4 rounded-md flex flex-col">
    {/* Calendar */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border bg-white"
      />
      {/* Holidays */}
      <div className="bg-white w-full h-full flex flex-col border border-slate-200 rounded-md p-4 gap-4">
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-black">Holidays (2025)</h5>
          <button className="underline underline-offset-4 text-sm text-black">
            View All
          </button>
        </div>
        <hr />
        <div>
          <ul className="overflow-scroll thin-scrollbar">
            <li className="flex justify-between items-center text-black">
              <span>1 Jan, Mon</span>
              <span>New Year</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Holidays;
