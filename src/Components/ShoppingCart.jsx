import React, { useEffect, useState } from 'react'

const ShoppingCart = () => {
    const[item, setItem] = useState({
        item: '',
        completed: false
    });
    const[allItems, setAllItems] = useState([]);

    useEffect(() =>{
        renderGroceryList()
    },[allItems])

    function handleSubmit(e) {

        if (e.key === "Enter") {
            setAllItems((prev) => [...prev, item])
        }

    }

    function renderGroceryList() {

        allItems && allItems.map((item, index) => (
            <li key={index} style={{"listStyle": "none"}}>
                <div className="input-group">
             <input type="checkbox" name="" id="" /> {item.item}
                </div>
            </li>
    
        ))
    }

  return (
    <>
    <h3>Shopping Cart</h3>
    <h3>Hier komt logo</h3>
    <input type="text" value={item.item} onChange={(e) => setItem({ item: e.target.value, completed: false})} onKeyDown={handleSubmit}/>
    <ul>
    {renderGroceryList()}
    </ul>

    </>
  )
}

export default ShoppingCart
