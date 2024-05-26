import React from "react";
import fetchDataOS from "./api/fetchDataOS";

const resource = fetchDataOS("https://dummyjson.com/todos/?delay=3000");

function TodosOS() {
  const { todos } = resource.read();
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {item.id} - {item.todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosOS;
