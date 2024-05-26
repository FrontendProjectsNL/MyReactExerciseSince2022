// src/App.js
import React, { useState } from "react";
import Calendar from "./Calendar";

function AppPureReactBookingHotelDateTimePicker() {
  const [checkInDateTime, setCheckInDateTime] = useState(null);
  const [checkOutDateTime, setCheckOutDateTime] = useState(null);

  const handleCheckInDateTimeSelect = (dateTime) => {
    setCheckInDateTime(dateTime);
    if (checkOutDateTime && dateTime >= checkOutDateTime) {
      setCheckOutDateTime(null); // Reset check-out date if it is before check-in date
    }
  };

  const handleCheckOutDateTimeSelect = (dateTime) => {
    if (checkInDateTime && dateTime > checkInDateTime) {
      setCheckOutDateTime(dateTime);
    } else {
      alert("Check-out date must be after check-in date.");
    }
  };

  const calculateTotalDays = () => {
    if (checkInDateTime && checkOutDateTime) {
      const timeDiff = checkOutDateTime - checkInDateTime;
      return timeDiff / (1000 * 60 * 60 * 24);
    }
    return 0;
  };

  return (
    <div className="App">
      <h1>Hotel Booking</h1>
      <div className="date-picker">
        <h1>Inside AppPureReactBookingHotelDateTimePicker.jsx</h1>
        <h2>Select Check-in Date and Time:</h2>
        <Calendar onDateTimeSelect={handleCheckInDateTimeSelect} />
        {checkInDateTime && (
          <p>Check-in Date and Time: {checkInDateTime.toString()}</p>
        )}
      </div>
      <div className="date-picker">
        <h2>Select Check-out Date and Time:</h2>
        <Calendar onDateTimeSelect={handleCheckOutDateTimeSelect} />
        {checkOutDateTime && (
          <p>Check-out Date and Time: {checkOutDateTime.toString()}</p>
        )}
      </div>
      {checkInDateTime && checkOutDateTime && (
        <div>
          <h2>Total Days:</h2>
          <p>{calculateTotalDays()} days</p>
        </div>
      )}
    </div>
  );
}

export default AppPureReactBookingHotelDateTimePicker;
