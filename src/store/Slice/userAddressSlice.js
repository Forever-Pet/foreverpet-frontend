import { createSlice } from "@reduxjs/toolkit";

const userAddressSlice = createSlice({
  name: "userAddressSlice",
  initialState: { value: false },
  reducers: {
    addressModal: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addressModal } = userAddressSlice.actions;
export default userAddressSlice;
