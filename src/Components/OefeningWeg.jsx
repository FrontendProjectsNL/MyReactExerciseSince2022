import React, { useEffect, useState } from "react";

function OefeningWeg({ name, children, bool }) {
  const [userDetails, setUserDetails] = useState(null);
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const urls = [
        "https://dummyjson.com/todos?delay=1000",
        "https://dummyjson.com/users?delay=3000",
      ];

      try {
        const promises = urls.map((url) =>
          fetch(url).then((res) => res.json())
        );

        const result = await Promise.all(promises);

        const [todosRes, userDetailsRes] = result;

        setUserDetails(userDetailsRes);
        setTodos(todosRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!userDetails || !todos) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>Mijn naam is: {name}</div>
      <div>{children}</div>

      <div>
        <div>
          <h2>Hallo {userDetails.users.id}</h2>
          <ul>
            {todos.todos.map((item) => (
              <li key={item.id}>
                <strong>ID:</strong> {item.id}, <strong>Title:</strong>{" "}
                {item.todo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OefeningWeg;
