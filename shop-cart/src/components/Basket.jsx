import React from 'react'

function Basket(props) {
  const {cartItems, onIncrease, onDecrease, onRemove, onClear} = props;
  const fullPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  
 
  return (
    <div>
      <h2>Cart</h2>
      <div>{cartItems.length === 0 && <div>Cart is empty</div>}
      <div className="basket-main">
        {cartItems.map((item)=> (
          <div key={item.id}>
            <p>{item.name}</p>
            <div>
              <button onClick={() => onIncrease(item)}>
                +
                </button>
                <button onClick={() => onDecrease(item)}>
                -
                </button>
                <div>
                  {item.qty} x ${item.price.toFixed(2)} = ${(item.qty*item.price).toFixed(2)}
                </div>
            </div>
            <button onClick={()=> onRemove(item)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
    <hr />
    <div>
      Full price:
      {fullPrice}
    </div>
    {cartItems.length !== 0 && <button onClick ={onClear}>
              Clear cart
            </button>}
    
    </div>

  )
}

export default Basket