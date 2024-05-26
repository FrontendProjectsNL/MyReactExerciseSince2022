import React, { useEffect, useState } from "react";

const Promise2 = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const testDelay = new Promise(
      (resolve) =>
        setTimeout(() => resolve("Succeeded!!!!!!!!!!!!!!!!!!!!!"), 5000)
      // deze zonder callback functie doet het niet: setTimeout(resolve, 5000)
    );
    testDelay.then((data) => setData(data)).catch((err) => setError(err));
  }, []);

  return <div>{data}</div>;
};

export default Promise2;
