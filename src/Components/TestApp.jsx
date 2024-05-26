import React, { useEffect, useState } from 'react'

const TestApp = () => {
    const [data, setData] = useState();

    useEffect(()=> {
        async function fetchData() {
           await fetch('http://localhost:5173/db.json')
           .then( res => {
            if(!res.ok) {
                throw new Error('Something went wrong!');
            }
            const data = res.json();
            return data;
           }).then( data => {
            setData(data);
           }
           ).catch(error => console.log(error))

        }

        fetchData();
    }, [])
  return (
    <div>
        
    </div>
  )
}

export default TestApp
