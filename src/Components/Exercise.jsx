import React, { useEffect, useState } from 'react'

const Exercise = () => {
  const [data, setData] = useState(null);

  useEffect(()=> {
    const fetchData = async ()=> {
        try{
            const response = await fetch('http://localhost:5173/db.json');
            if(!response.ok) throw new Error("Couldn't catch data!")
            setData(await response.json());
        }
        catch(error) {
            console.log("Something went wrong! ", error);
        }
    } 
    setTimeout(
        () => {
            fetchData();
        }, 2000
    )
  },[])
    
  return (

        <div key={Math.random()}>
    <div key={Math.random()}>Exercise</div>

    {data ? (
    <div key={Math.random()}>
        {data.data.map((item) => (
            <div key={Math.random()}>
             <h3 key={Math.random()}>{item.title}</h3>
             <p key={Math.random()}>{item.body}</p>
            </div>
        )
        
        )
}
</div>
    ): (<h3 key={Math.random()}>...loading</h3>)
}

</div>

  )
}

export default Exercise
