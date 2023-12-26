import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
let list = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    onIncrease(state, action) {
        console.log('radi')
      const exist = cartItems.find((x) => x.id === state.id);
      let output
      if (exist) {
       output = cartItems.map((x) =>
          x.id === state.id ? { ...exist, qty: exist.qty + 1 } : x
        );
      } else {
        output= [...cartItems, { ...state, qty: 1 }]
      }
      return cartItems;
    },
    removeFromCart(state, action) {
      state = action.payload;
      list = list.filter((el) => el.naziv !== state.naziv);
      return list;
    },
    decreaseCartQuantity(state, action) {},
  },
});
