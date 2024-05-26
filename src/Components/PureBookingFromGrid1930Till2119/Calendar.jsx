import React, { useState } from "react";
import "./Calendar.css";

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isYearSelection, setIsYearSelection] = useState(false);
  const [currentDecadeStart, setCurrentDecadeStart] = useState(
    Math.floor(new Date().getFullYear() / 10) * 10
  );

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    let days = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push(
        <div
          key={day}
          className={`calendar-day ${
            selectedDate && selectedDate.toDateString() === date.toDateString()
              ? "selected"
              : ""
          }`}
          onClick={() => handleDateClick(date)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const renderYears = () => {
    const years = [];
    for (let i = currentDecadeStart; i < currentDecadeStart + 10; i++) {
      years.push(
        <div
          key={i}
          className={`calendar-year ${
            currentDate.getFullYear() === i ? "selected" : ""
          }`}
          onClick={() => handleYearClick(i)}
        >
          {i}
        </div>
      );
    }
    return (
      <div className="calendar-years-container">
        <button className="calendar-decade-nav" onClick={handlePrevDecade}>
          &#9664;
        </button>
        <div className="calendar-years">{years}</div>
        <button className="calendar-decade-nav" onClick={handleNextDecade}>
          &#9654;
        </button>
      </div>
    );
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleYearClick = (year) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1));
    setIsYearSelection(false);
  };

  const handleYearToggle = () => {
    setIsYearSelection(!isYearSelection);
  };

  const handlePrevDecade = () => {
    setCurrentDecadeStart(currentDecadeStart - 10);
  };

  const handleNextDecade = () => {
    setCurrentDecadeStart(currentDecadeStart + 10);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth} disabled={isYearSelection}>
          Prev
        </button>
        <div onClick={handleYearToggle} className="calendar-year-toggle">
          {currentDate.getFullYear()}
        </div>
        <div>{currentDate.toLocaleString("default", { month: "long" })}</div>
        <button onClick={handleNextMonth} disabled={isYearSelection}>
          Next
        </button>
      </div>
      <div className="calendar-body">
        {isYearSelection ? (
          renderYears()
        ) : (
          <>
            {daysOfWeek.map((day, index) => (
              <div key={index} className="calendar-day-name">
                {day}
              </div>
            ))}
            {renderDays()}
          </>
        )}
      </div>
    </div>
  );
};

export default Calendar;
