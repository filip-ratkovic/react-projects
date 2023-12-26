import React, { useState } from "react";
import data from "../data/data";
import Basket from "../components/Basket";
import "../style/products.css"

const Products = () => {
  const [cartItems, setCartItems] = useState([]);

  const onIncrease = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems , {...product, qty : 1}])
    }
  };

  const onDecrease = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    }else {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  const onRemove = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id))
  }

  const onClear = () => {
    setCartItems([])
  }
  
  return (
    <div className="products-main">
      <div className="products-card-cont">
        {data.map((prod) => {
          return (
            <div key={prod.id} className="product-card">
              <h2>{prod.name}</h2>
              <p>{prod.price} $</p>
              <img src={prod.img} alt={prod.name} style={{ width: "80%" }} />
              <div>
                <button onClick={() => onIncrease(prod)}>Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>

      <Basket cartItems={cartItems} onIncrease={onIncrease} onDecrease={onDecrease} onRemove= {onRemove} onClear={onClear} />
    </div>
  );
};

export default Products;
