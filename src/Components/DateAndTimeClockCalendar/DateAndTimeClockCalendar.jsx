import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateAndTimeClockCalendar = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (date) => {
    setSelectedDateTime(date);
    console.log("Selected Date and Time:", date);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <DatePicker
        selected={selectedDateTime}
        onChange={handleDateTimeChange}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
        inline // Set inline to true to hide the input field and show just the calendar
      />
    </div>
  );
};

export default DateAndTimeClockCalendar;

//open // Set open to true to display the calendar by default
//inline // Set inline to true to hide the input field and show just the calendar
