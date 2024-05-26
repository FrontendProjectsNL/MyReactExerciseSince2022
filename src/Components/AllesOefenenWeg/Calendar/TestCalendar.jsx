import React, { useEffect, useState } from "react";
import "./TestCalendar.css";

const daysOfWeek = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];

const TestCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isYearSelection, setIsYearSelection] = useState(false);
  const [decadeStart, setDecadeStart] = useState(
    Math.floor(new Date().getFullYear() / 10) * 10
  );

  console.log("decadeStart: ", decadeStart);

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dayOfWeek = currentDate.getDay();

    let days = [];

    for (let day = 0; day < dayOfWeek; day++) {
      days.push(
        <div className="calendar-day empty" key={`empty-${day}`}></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month + 1, day);
      days.push(
        <div
          className="calendar-day"
          key={`calendar-day-${day}`}
          onClick={() => handleDateSelected(date)}
        >
          {" "}
          {day}
        </div>
      );
    }

    return days;
  };

  const renderYears = () => {};

  const handleDateSelected = (date) => {
    setCurrentDate(date);
    console.log(date);
  };

  // const renderYear = () => {};
  return (
    <div className="container">
      <div className="calendar-navs">
        <button className="prev">Prev</button>
        <button
          className="year"
          onClick={() => setIsYearSelection((prev) => !prev)}
        >
          {currentDate.getFullYear()}
        </button>
        <button className="next">Next</button>
      </div>
      <div className="calendar">
        {isYearSelection ? (
          ""
        ) : (
          <>
            {daysOfWeek.map((dayName) => (
              <div className="day-name" key={`day-name-${dayName}`}>
                {dayName}
              </div>
            ))}
            {renderDays()}
          </>
        )}
      </div>
    </div>
  );
};

export default TestCalendar;
