import { configureStore } from "@reduxjs/toolkit";
import userAddressSlice from "./Slice/userAddressSlice";
import CartSlice from './Slice/CartSlice'

const store = configureStore({
  reducer: {
    address: userAddressSlice.reducer,
    cart: CartSlice.reducer
  },
});

export default store;
