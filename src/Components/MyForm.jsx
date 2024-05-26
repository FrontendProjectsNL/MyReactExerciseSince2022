import React from 'react'

function MyForm() {

    function handleSubmit(e) {
        e.preventDefault();
       
        // console.log(e)
        // console.log(e.target)
        console.log(e)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <h4>form - test</h4>
        <input type="text" placeholder='Item...' />
        <button>Add</button>
    </form>
    </>
  )
}

export default MyForm
