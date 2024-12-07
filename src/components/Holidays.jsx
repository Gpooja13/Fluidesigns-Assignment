import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { holidaylist } from "@/Info/Info";

const Holidays = () => {
  const [date, setDate] = useState(new Date());
  const [showAll, setShowAll] = useState(false);

  const initialCount = 5;
  const displayedHolidays = showAll ? holidaylist : holidaylist.slice(0, initialCount);

  const toggleShowAll = () => setShowAll(!showAll);

  return (
    <aside className="w-[19vw] h-[calc(100vh-41vh)] gap-4 rounded-md flex flex-col">
      {/* Calendar */}
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border bg-white"
      />
      {/* Holidays */}
      <div className="bg-white w-full min-h-[calc(100vh-33vh-50vh)] flex flex-col border border-slate-200 rounded-md p-4 pb-6 gap-4">
        {/* Fixed Header */}
        <div className="flex justify-between items-center">
          <h5 className="font-semibold text-black">Holidays (2025)</h5>
          <button
            className="underline underline-offset-4 text-sm text-black"
            onClick={toggleShowAll}
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
        <hr />
        {/* Scrollable List */}
        <div className="overflow-y-auto thin-scrollbar flex-1">
          <ul className="flex flex-col gap-8">
            {displayedHolidays.map((holiday, index) => (
              <li key={index} className="flex justify-between items-center">
                <span className="text-black">{`${holiday.date}, ${holiday.day}`}</span>
                <span>{holiday.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Holidays;
