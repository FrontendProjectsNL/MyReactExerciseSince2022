// src/Calendar.js
import React, { useState } from "react";
import "./Calendar.css";

const Calendar = ({ onDateTimeSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState({
    hours: "00",
    minutes: "00",
  });

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

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (event) => {
    const { name, value } = event.target;
    setSelectedTime((prevTime) => ({
      ...prevTime,
      [name]: value,
    }));
  };

  const handleSelectDateTime = () => {
    if (selectedDate) {
      const dateTime = new Date(selectedDate);
      dateTime.setHours(selectedTime.hours);
      dateTime.setMinutes(selectedTime.minutes);
      onDateTimeSelect(dateTime);
    }
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

  return (
    <div className="calendar">
      <b>inside Calendar.jsx in AppPureReactBookingHotelDateTimePicker</b>
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>Prev</button>
        <div>
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <button onClick={handleNextMonth}>Next</button>
      </div>
      <div className="calendar-body">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="calendar-day-name">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
      {selectedDate && (
        <div className="time-picker">
          <h3>Select Time</h3>
          <label>
            Hours:
            <input
              type="number"
              name="hours"
              min="0"
              max="23"
              value={selectedTime.hours}
              onChange={handleTimeChange}
            />
          </label>
          <label>
            Minutes:
            <input
              type="number"
              name="minutes"
              min="0"
              max="59"
              value={selectedTime.minutes}
              onChange={handleTimeChange}
            />
          </label>
          <button onClick={handleSelectDateTime}>Select Date and Time</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
