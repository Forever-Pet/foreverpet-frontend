import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    cartItem: [],
    cartOpen: false,
  },
  reducers: {

    putIn(state, action) {
      const i = state.cartItem.findIndex((a) => { return a.id === action.payload.id })
      if (i === -1) { //중복아니면
        state.cartItem = [...state.cartItem, action.payload]
        const updatedItems = state.cartItem.map((obj) => {
          if (obj.count == undefined) {
            return { ...obj, count: 1 }
          } else {
            return { ...obj }
          }
        })
        state.cartItem = updatedItems
      } else { //중복이면
        state.cartItem[i].count++;
      }
    },
    removeCart(state, action) {
      const i = state.cartItem.findIndex((a) => { return a.id === action.payload.id })
      state.cartItem.splice(i, 1)
    },

    increase(state, action) {
      const i = state.cartItem.findIndex((a) => { return a.id === action.payload.id })
      state.cartItem[i].count++;
    },

    decrease(state, action) {
      const i = state.cartItem.findIndex((a) => { return a.id === action.payload.id })
      if (state.cartItem[i].count !== 1) {
        state.cartItem[i].count--;
      }
    },

    cartIsOpen(state, action) {
      if (action.payload) {
        state.cartOpen = true
      } else {
        state.cartOpen = !state.cartOpen
      }
    }

  }
})

export const { putIn, removeCart, increase, decrease, cartIsOpen } = CartSlice.actions
export default CartSlice