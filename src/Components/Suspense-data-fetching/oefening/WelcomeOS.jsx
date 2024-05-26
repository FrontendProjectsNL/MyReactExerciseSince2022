import React from "react";
import fetchDataOS from "./api/fetchDataOS";

const resource = fetchDataOS("https://dummyjson.com/users/?delay=1000");

function WelcomeOS() {
  const data = resource.read();
  console.log("data.userdetails", data);

  return (
    <div>
      <p>Welcome {data.users[0].lastName}</p>
    </div>
  );
}

export default WelcomeOS;
