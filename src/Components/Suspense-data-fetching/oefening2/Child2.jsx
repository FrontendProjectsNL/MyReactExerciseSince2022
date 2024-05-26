import React from "react";
import fetchData from "./api/fetchData";

const resource = fetchData("https://dummyjson.com/users/?delay=1000");

const Child2 = () => {
  const data = resource.read();

  return <div>Welkom {data.users.lastName}</div>;
};

export default Child2;
