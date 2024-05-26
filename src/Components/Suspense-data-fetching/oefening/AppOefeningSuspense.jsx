import React, { Suspense } from "react";
import WelcomeOS from "./WelcomeOS";
import TodosOS from "./TodosOS";

const AppOefeningSuspense = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading.... </div>}>
        <WelcomeOS />
      </Suspense>

      <Suspense fallback={<p>Loading todos...</p>}>
        <TodosOS />
      </Suspense>
    </div>
  );
};

export default AppOefeningSuspense;
