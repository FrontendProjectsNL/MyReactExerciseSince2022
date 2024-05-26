import React from "react";
import fetchData from "../api/api/fetchData";

const resource = fetchData("https://dummyjson.com/users/?delay=1000");

const UserWelcome = () => {
  const data = resource.read();
  console.log("inside UserWelcome!!!!");
  console.log(data);

  return (
    <div>
      <p>
        Welcome <span className="user-name">{data.users[0].lastName}</span>,
        here are your Todos for today
      </p>
      <small>Completed todos have a line through them</small>
    </div>
  );
};

export default UserWelcome;
