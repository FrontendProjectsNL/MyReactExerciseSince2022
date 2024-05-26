import React, { useEffect } from 'react'

const BestWayToFetchDataWithFetchMethod = () => {
  
    // useEffect(()=> {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch("http://localhost:5173/db.json");
    //             if(!response.ok) console.log("Something went wrong! We couldn't fetch data!")
    //             const data =  await response.json();
    //         //set state in react (useState), bijvoorbeeld setData();
    //             console.log(data.data);

    //         }
    //         catch(error) {
    //             console.log("Error is: ", error)
    //         }
    //     }

    //    fetchData();
    // }, [])
  


    useEffect(()=> {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5173/db.json');
                if(!response.ok) throw new Error("Couldn't fetch Data!");
                const data = await response.json();
                if(!data.data) throw new Error('There is no data.data');
                console.log("*************")
                console.log(data.data);
            }
            catch(error) {
                console.log("Something went wrong!", error);
            }
        }
        fetchData();

        // const fetchInterval = setInterval(fetchData, 5000);

        // return () => clearInterval(fetchInterval);

    },[])

    return (
    <>
  <div>
    <h3>Animated Components</h3>
  </div>
    </>
  )
}

export default BestWayToFetchDataWithFetchMethod
