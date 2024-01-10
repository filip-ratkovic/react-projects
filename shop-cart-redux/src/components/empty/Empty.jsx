import React from 'react'

const Empty = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
        <img width="200" height="200"  src="https://img.icons8.com/bubbles/100/buy.png" alt="buy"/>
        <h2 style={{marginBlock:"10px"}}>Your cart is empty</h2>
        <p style={{color:"#93a0a3"}}>Looks like you haven't made your choice yet...</p>

    </div>
  )
}

export default Empty