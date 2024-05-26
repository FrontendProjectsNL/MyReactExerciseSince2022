import { Link } from "react-router-dom";

export default function Component1() {
  const dataToPass = { name: "John Doe", age: 25 };
  return (
    <div>
      <h1>Welcome to the Home Component</h1>
      <Link
        to="/component2"
        state={{ message: "dataPassedSuccessful", data: dataToPass }}
      >
        Go to Other Component
      </Link>
    </div>
  );
}
