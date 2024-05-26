import React, { useContext } from "react";
import MijnContextProvider2, {
  MijnContext,
} from "./ExerciseNow/MijnContextProvider2";

const TestMijnContextProvider2 = () => {
  const mijnObject = useContext(MijnContext);
  console.log("mijnObject is: ", mijnObject);
  return (
    <div>
      TestMijnContextProvider2: {mijnObject.name} - {mijnObject.job}
    </div>
  );
};

export default TestMijnContextProvider2;
