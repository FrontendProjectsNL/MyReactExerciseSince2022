import React, { Suspense } from "react";

import UserWelcome from "./UserWelcome";
import Todos from "./Todos";

const AppTodos = () => {
  return (
    <div className="app">
      <h2>Simple Todo</h2>

      <Suspense fallback={<p>Loading user details...</p>}>
        <UserWelcome />
      </Suspense>

      <Suspense fallback={<p>Loading Todos...</p>}>
        <Todos />
      </Suspense>

      {/* <Suspense fallback={<p>Loading user details...</p>}>
        <UserWelcome />
        <Todos />
      </Suspense> */}
    </div>
  );
};

export default AppTodos;
