import React, { useEffect } from 'react'

function TestComponent() {
    async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

async function getData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}


useEffect( ()=> {
    getData();
}, [])

  return (
    <div>TestComponent</div>
  )
}

export default TestComponent
