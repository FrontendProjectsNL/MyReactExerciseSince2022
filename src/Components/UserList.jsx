import React, { useEffect, useState } from 'react'

function UserList() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/data')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))

    }, [])

    const header = <h1>Page Title</h1>;

    function wrapInDiv(content) {
        return <div><h3>{content}</h3></div>;
      }
      
      const element = wrapInDiv(<p>Wrapped content</p>);

  return (
    <>
    {header}
    <h3>UserList:</h3>
    <ul>
        {
        data && data.map(item => (
            <li key={item.id}>{item.title}</li>
        )) 
        
        }
    </ul>
    {element}
    </>
  )
}

export default UserList
