import React, { Suspense } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

const Parent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Child1... </div>}>
        <Child1 />
      </Suspense>

      <Suspense fallback={<p>Loading Child2...</p>}>
        <Child2 />
      </Suspense>
    </div>
  );
};

export default Parent;
