import { createSlice } from "@reduxjs/toolkit";

const localAuthSlice = createSlice({
  name: "localAuthSlice",
  initialState: { token: sessionStorage.getItem("auth") },
  reducers: {
    addToken(state, action) {
      state.token = action.payload;
      if (action.payload !== null || action.payload !== undefined)
        return sessionStorage.setItem("auth", action.payload);
    },
    removeToken(state, action) {
      state.token = "";
      sessionStorage.removeItem("auth");
      const kakaoUser = sessionStorage.getItem("kakao");
      if (kakaoUser !== null || kakaoUser !== undefined)
        return sessionStorage.removeItem("kakao");
    },
  },
});

export const { addToken, removeToken } = localAuthSlice.actions;
export default localAuthSlice;
