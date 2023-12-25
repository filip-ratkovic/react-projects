import React from 'react'

function Basket(props) {
  const {cartItems} = props;
  console.log(cartItems)
  return (
    <div>
      <h2>Cart</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}
    </div>
    </div>

  )
}

export default Basket