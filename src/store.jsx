import { configureStore } from "@reduxjs/toolkit";
import CartSlices  from "./redux/slices/cartSlices";


export const Store = configureStore({
  reducer:{
    cart: CartSlices,
  }
});
