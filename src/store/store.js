import { configureStore } from "@reduxjs/toolkit";
import userAddressSlice from "./Slice/userAddressSlice";
import CartSlice from './Slice/CartSlice'
import ModalSlice from "./Slice/ModalSlice";

const store = configureStore({
  reducer: {
    address: userAddressSlice.reducer,
    cart: CartSlice.reducer,
    modal: ModalSlice.reducer
  },
});

export default store;
