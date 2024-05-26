import React, { useEffect, useState } from "react";

const GetUsers = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testDelay = new Promise((resolve) =>
      setTimeout(() => {
        console.log("Succeeded!!!!!!!!!!!!!!!!!!!!!");
        resolve(); // Resolve the Promise after the delay
      }, 5000)
    );

    const fetchData = async () => {
      try {
        // await testDelay;
        await testDelay;

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const resData = await response.json();
        setData(resData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    throw new Error("Failed to fetch");
  }

  return (
    <div>
      {data?.map((res) => (
        <p key={res.id}>{res.name}</p>
      ))}
    </div>
  );
};

//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/users"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const jsonData = await response.json();
//         // Assume some condition causes an error
//         console.log("jsonData.someCondition is:", jsonData.someCondition); //resulteert in undefined
//         if (!jsonData.someCondition) {
//           throw new Error("Some error occurred");
//         }
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {/* Display error message */}
//       {error && <p>Error: {error.message}</p>}
//     </div>
//   );
// };

export default GetUsers;
