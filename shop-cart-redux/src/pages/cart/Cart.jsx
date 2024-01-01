import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const cartList = cartItems.list;
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)


const handleQty = (data) => {
  dispatch(updateQuantity(data))
}
const handleRemove = (data) => {
  dispatch(removeItem({id: data?.id}))
}
  return (
    <div>
      {cartList && cartList.length > 0 ? (
        <div className="cart-main" style={{display:"flex", padding:"20px"}}>
          {cartList.map((item) => {
            return (
              <div className="cart-item" key={item.id} style={{padding:"20px"}} >
                <img src={item.img} alt={item.name} style={{width:"200px"}} />
                <h1>{item.name}</h1>
                <p>{item.price.toFixed(2)}$</p>
              <div style={{display:"flex"}}>
              <button onClick={() => {
                handleQty({...item, quantity : item.quantity+1})
              }}>+</button>
              <p>{item.quantity}</p>
              <button onClick={() => {
                if(item.quantity>1) {
                  handleQty({...item, quantity : item.quantity-1})
                }
              }} >-</button>
              </div>
              <p>
                {(item.price * item.quantity).toFixed(2)} $
              </p>
                <button onClick={()=> {
                  handleRemove(item)
                }}>Remove</button>
                <button>Clear all</button>
              </div>
            );
          })}
          <h2>Total : {cart.total}</h2>
        </div>
      ) : (
        <div className="cart-empty">empty</div>
      )}
    </div>
  );
};

export default Cart;
