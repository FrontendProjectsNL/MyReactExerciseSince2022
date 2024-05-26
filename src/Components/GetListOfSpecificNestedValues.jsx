import React from 'react'

const jsonData = {
    "name": "John",
    "age": 30,
    "address": {
      "city": "New York",
      "zip": "10001"
    },
    "friends": [
      {
        "name": "Alice",
        "age": 28
      },
      {
        "name": "Bob",
        "age": 32,
        "hobbies": ["Reading", "Traveling"]
      }
    ]
  };
  

 const myObject = {
    id: 12,
    job: 'Teacher'

 } 

const GetListOfSpecificNestedValues = () => {
  return (
    <div>GetListOfSpecificNestedValues</div>
  )
}

export default GetListOfSpecificNestedValues
