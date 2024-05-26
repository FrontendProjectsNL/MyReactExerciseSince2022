import React, { useEffect, useState } from 'react'

const SetIntervalDataFetching = () => {
    const [data, setData] = useState(null);
    useEffect( ()=> {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:5173/db.json');
                if(!response.ok) throw new Error("Couldn't fetch data!")
                const data = await response.json();
            setData(data.data)

            }
            catch(error) {
                console.log("Something went wrong! ", error);
            }
        }

        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, [])

  return (
    <div>SetIntervalDataFetching{console.log(data)}</div>
  )
}

export default SetIntervalDataFetching
