import React, { useState, useRef } from "react";

const VanillaJavaScriptDatePicker = () => {
  const checkinRef = useRef(null);
  const checkoutRef = useRef(null);
  const [error, setError] = useState("");

  const handleDatePicker = () => {
    const selectedDateCheckin = new Date(checkinRef.current.value);
    const selectedDateCheckout = new Date(checkoutRef.current.value);

    if (
      isNaN(selectedDateCheckin.getTime()) ||
      isNaN(selectedDateCheckout.getTime())
    ) {
      setError("Please enter valid check-in and check-out dates.");
      return;
    }

    if (selectedDateCheckout <= selectedDateCheckin) {
      setError("Check-out date must be after check-in date.");
      return;
    }

    setError(""); // Clear any previous error messages

    const formatter = new Intl.DateTimeFormat("nl-NL", {
      timeZone: "Europe/Amsterdam",
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    console.log("Check-in:", formatter.format(selectedDateCheckin));
    console.log("Check-out:", formatter.format(selectedDateCheckout));
  };

  return (
    <>
      <h4>Book a hotel:</h4>
      <div>
        <label htmlFor="datepicker-checkin">Check-in</label>
        <input type="date" id="datepicker-checkin" ref={checkinRef} />
      </div>

      <div>
        <label htmlFor="datepicker-checkout">Check-out</label>
        <input type="date" id="datepicker-checkout" ref={checkoutRef} />
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <div>
        <button onClick={handleDatePicker}>Book Hotel</button>
      </div>
    </>
  );
};

export default VanillaJavaScriptDatePicker;
