import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wishSlice",
  initialState: {
    wishItem: [],
  },
  reducers: {

    wishPutIn(state, action) {
      const i = state.wishItem.findIndex((a) => { return a.id === action.payload.id })
      if (i === -1) { //중복아니면
        state.wishItem = [...state.wishItem, action.payload]
      } else { //이미 들어 있는 아이템 한번 더 클릭하면 위시리스트에서 빼기
        state.wishItem.splice(i, 1)
      }
    }
  }
})

export const { wishPutIn } = wishSlice.actions
export default wishSlice