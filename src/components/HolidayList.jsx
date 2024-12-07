import React, { useState } from "react";
import { holidaylist } from "@/Info/Info";

const HolidayList = () => {
    const [showAll, setShowAll] = useState(false);

  const initialCount = 5;
  const displayedHolidays = showAll ? holidaylist : holidaylist.slice(0, initialCount);

  const toggleShowAll = () => setShowAll(!showAll);
  return (
    <div className="bg-white w-full min-h-[calc(100vh-33vh-50vh)] flex flex-col border border-slate-200 rounded-md p-4 pb-6 gap-3">
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
  );
};

export default HolidayList;
