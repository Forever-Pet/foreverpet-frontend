import { configureStore } from "@reduxjs/toolkit";
import userAddressSlice from "./Slice/userAddressSlice";

const store = configureStore({
  reducer: {
    address: userAddressSlice.reducer,
  },
});

export default store;
