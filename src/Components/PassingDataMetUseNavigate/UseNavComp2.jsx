import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const UseNavComp2 = (props) => {
  const locationTest = useLocation();
  const [onState, setOnState] = useState(false);
  return (
    <>
      <div>
        previous location is: {locationTest.state.dataDoorgeven.prevLocation}
      </div>
      <h3>Info</h3>
      <p>name: {locationTest.state.dataDoorgeven.name}</p>
      <p>job: {locationTest.state.dataDoorgeven.job}</p>
      <button onClick={() => setOnState(!onState)}>go to nav-comp</button>
      {onState && (
        <Navigate
          to="/nav-comp"
          state={{ mijnData: { name: "Omid", job: "lawer" } }}
        />
      )}
    </>
  );
};

export default UseNavComp2;
