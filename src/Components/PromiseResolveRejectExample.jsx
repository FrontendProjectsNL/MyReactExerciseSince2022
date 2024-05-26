import React, {useEffect, useState} from 'react'

const PromiseResolveRejectExample = () =>  {
const [success, setSuccess] = useState(false);
console.log("Success is: ",success)

      const fetchData = () => {
        return new Promise((resolve, reject) => {
          // Simulating an asynchronous operation
         // Simulating a successful operation, change to false to simulate failure
          setTimeout(() => {
            if (success) {
              resolve('Data fetched successfully!!!!!!!!*************!!!!');
            } else {
              reject('Error fetching data!');
            }
          }, 1000);
        });
      };
    
      const fetchDataAsync = async () => {
        try {
          const result = await fetchData();
          console.log(result);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      useEffect(() => {
        fetchDataAsync();
      }, [success]);
    
      return <div>
        <button onClick={() => setSuccess(!success)}>Click</button> 
        <p>success is: {success} </p>

      </div>;
    };

export default PromiseResolveRejectExample
