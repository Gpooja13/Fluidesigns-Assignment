import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import HolidayList from "./HolidayList";

const Holidays = () => {
  const [date, setDate] = useState(new Date());

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
      <HolidayList/>
    </aside>
  );
};

export default Holidays;
