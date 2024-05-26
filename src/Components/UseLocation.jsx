import React from "react";
import { useLocation } from "react-router-dom";

const UseLocation = () => {
  const location = useLocation();
  const test1 = location.state;

  console.log("Current URL:", location.pathname);
  console.log("Full location using window.location.href", window.location.href);
  console.log("location.state is:", location.state);

  return <h1>Zie console</h1>;
};

export default UseLocation;
