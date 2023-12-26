import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  theme: themeSlice.reducer,
  cart: cartSlice.reducer
});