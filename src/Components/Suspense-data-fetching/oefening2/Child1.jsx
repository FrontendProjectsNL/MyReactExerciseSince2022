import React from "react";
import fetchData from "./api/fetchData";

const resource = fetchData("https://dummyjson.com/todos/?delay=3000");

const Child1 = () => {
  const data = resource.read();
  return (
    <div>
      <ul>
        {data.todos.map((item) => (
          <li key={item.id}>
            {item.id} - {item.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child1;
