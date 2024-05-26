import React from "react";
import fetchData from "../api/api/fetchData";

const resource = fetchData("https://dummyjson.com/todos/?delay=3000");

// Een voorbeeld van een todo json:
//https://run.mocky.io/v3/e6cb1e83-c346-4ce7-970e-b4088a2311fa?mocky-delay=3000ms
// {
//     "todos": [
//       {
//         "id": 1,
//         "title": "Do something nice for someone I care about"
//       },
//       {
//         "id": 2,
//         "title": "Memorize the fifty states and their capitals"
//       },
//       {
//         "id": 3,
//         "title": "Watch a classic movie"
//       },
//       {
//         "id": 4,
//         "title": "Contribute code or a monetary donation to"
//       },
//       {
//         "id": 5,
//         "title": "Solve a Rubik's cube"
//       },
//       {
//         "id": 6,
//         "title": "Bake pastries for me and neighbor"
//       }
//     ]
//   }

const Todos = () => {
  const data = resource.read();

  const renderTodos = data.todos.map((todo) => {
    const className = todo.status === "Completed" ? "todo-completed" : "todo";
    return (
      <li className={`todo ${className}`} key={todo.id}>
        {todo.title}
      </li>
    );
  });

  return (
    <div>
      <h3>Todos</h3>
      <ol className="todos">{renderTodos}</ol>
    </div>
  );
};

export default Todos;
