import { createSlice } from "@reduxjs/toolkit";

const localAuthSlice = createSlice({
  name: "localAuthSlice",
  initialState: { token: sessionStorage.getItem("auth") },
  reducers: {
    addToken(state, action) {
      state.token = action.payload;
      sessionStorage.setItem("auth", action.payload);
    },
    removeToken(state, action) {
      state.token = "";
      sessionStorage.removeItem("auth");
    },
  },
});

export const { addToken, removeToken } = localAuthSlice.actions;
export default localAuthSlice;
