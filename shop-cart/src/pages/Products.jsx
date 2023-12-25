import React, { useState } from 'react'
import data from '../data/data'
import Basket from '../components/Basket'

const Products = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
     <div style={{width:"98vw", minHeight:"50vh", display:"flex", justifyContent:"center", alignItems:"center"}}> {data.map((prod)=> {
        return <div key={prod.id}>
          <h2>
            {prod.name}
          </h2>
          <p>{prod.price} $</p>
          <img src={prod.img} alt={prod.name} style={{width:"200px"}}/>
          <div><button>Add to cart</button></div>
           </div>
      })}</div>

      <Basket cartItems = {cartItems}/>
    </div>
  )
}

export default Products