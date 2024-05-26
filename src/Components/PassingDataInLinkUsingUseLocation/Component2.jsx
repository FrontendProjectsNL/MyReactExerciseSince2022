// In the component where you want to access the state
import { useLocation } from "react-router-dom";

function Component2() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      <h1>location.state: </h1>
      <p>message: {location.state.message}</p>
      <p>name: {location.state.data.name}</p>
      <p>age: {location.state.data.age}</p>
    </div>
  );
}

export default Component2;
