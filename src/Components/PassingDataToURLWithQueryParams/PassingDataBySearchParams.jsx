import React from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

function PassingDataBySearchParams() {
  const currentLocation = useLocation();
  console.log(currentLocation);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate({
      pathname: "/GettingSearchQueryParamsData",
      search: createSearchParams({
        id: "123",
        name: "cyrusnl",
        salary: "90000 euro",
      }).toString(),
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Pass data to next page!</button>
    </div>
  );
}

export default PassingDataBySearchParams;
