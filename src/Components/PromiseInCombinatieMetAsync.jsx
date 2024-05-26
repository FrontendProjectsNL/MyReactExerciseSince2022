import React, { useEffect } from 'react'

const PromiseInCombinatieMetAsync = () => {
    function fetchData() {
        return new Promise((resolve, reject) => {
          // Asynchronous operation
          setTimeout(() => {
            resolve('Data fetched successfully!!!!!!!!*************!!!!');
          }, 1000);
        });
      }
      
      async function fetchDataAsync() {
        try {
          const result = await fetchData();
          console.log(result);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      useEffect(()=> {
        fetchDataAsync();
      },[])
      
  return (
    <div>PromiseInCombinatieMetAsync</div>
  )
}

export default PromiseInCombinatieMetAsync

