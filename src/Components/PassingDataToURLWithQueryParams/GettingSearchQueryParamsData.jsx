import React from "react";
import { useSearchParams } from "react-router-dom";

const GettingSearchQueryParamsData = () => {
  const [evenTesten] = useSearchParams();
  return (
    <div>
      <h3>data fetched:</h3>
      <p>name is: {evenTesten.get("name")}</p>
      <p>salary: {evenTesten.get("salary")}</p>
    </div>
  );
};

export default GettingSearchQueryParamsData;
