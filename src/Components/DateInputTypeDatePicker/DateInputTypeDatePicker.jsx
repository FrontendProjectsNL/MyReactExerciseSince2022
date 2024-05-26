import React, { useState, useRef } from "react";

const DateInputTypeDatePicker = () => {
  const checkinDateRef = useRef(null);
  const checkoutDateRef = useRef(null);
  const checkinTimeRef = useRef(null);
  const checkoutTimeRef = useRef(null);
  const [error, setError] = useState("");

  const handleDatePicker = () => {
    console.log(
      "checkinDateRef.current.value is: ",
      checkinDateRef.current.value
    );
    console.log(
      "checkoutDateRef.current.value is: ",
      checkoutDateRef.current.value
    );
    console.log(
      "checkinTimeRef.current.value is: ",
      checkinTimeRef.current.value
    );
    console.log(
      "checkoutTimeRef.current.value is: ",
      checkoutTimeRef.current.value
    );

    const selectedDateCheckin = new Date(
      `${checkinDateRef.current.value}T${checkinTimeRef.current.value}:00`
    );
    const selectedDateCheckout = new Date(
      `${checkoutDateRef.current.value}T${checkoutTimeRef.current.value}:00`
    );

    if (
      isNaN(selectedDateCheckin.getTime()) ||
      isNaN(selectedDateCheckout.getTime())
    ) {
      setError("Please enter valid check-in and check-out dates and times.");
      return;
    }

    if (selectedDateCheckout <= selectedDateCheckin) {
      setError("Check-out date and time must be after check-in date and time.");
      return;
    }

    setError(""); // Clear any previous error messages

    const formatter = new Intl.DateTimeFormat("nl-NL", {
      timeZone: "Europe/Amsterdam",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    console.log("Check-in:", formatter.format(selectedDateCheckin));
    console.log("Check-out:", formatter.format(selectedDateCheckout));
  };

  return (
    <>
      <h4>Book a hotel:</h4>
      <div>
        <label htmlFor="datepicker-checkin">Check-in Date</label>
        <input type="date" id="datepicker-checkin" ref={checkinDateRef} />
      </div>
      <div>
        <label htmlFor="timepicker-checkin">Check-in Time</label>
        <input type="time" id="timepicker-checkin" ref={checkinTimeRef} />
      </div>

      <div>
        <label htmlFor="datepicker-checkout">Check-out Date</label>
        <input type="date" id="datepicker-checkout" ref={checkoutDateRef} />
      </div>
      <div>
        <label htmlFor="timepicker-checkout">Check-out Time</label>
        <input type="time" id="timepicker-checkout" ref={checkoutTimeRef} />
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <div>
        <button onClick={handleDatePicker}>Book Hotel</button>
      </div>
    </>
  );
};

export default DateInputTypeDatePicker;
