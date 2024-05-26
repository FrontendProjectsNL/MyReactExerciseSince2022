import React from "react";
import { useLocation } from "react-router-dom";

const MetNavComp = () => {
  const location = useLocation();
  return (
    <div>
      <p>name: {location.state.mijnData.name}</p>
      <p>name: {location.state.mijnData.job}</p>
    </div>
  );
};

export default MetNavComp;
