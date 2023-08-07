import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    modalState: {
      isOpen: false,
      secondOpen: false,
      title: "",
      leftBtn: "",
      rightBtn: "",
      content: "",
      data: "",
    },
    cartOpen: false
  },
  reducers: {
    openModal(state, action) {
      state.modalState.isOpen = true
      state.modalState.title = action.payload.title || ""
      state.modalState.leftBtn = action.payload.leftBtn || ""
      state.modalState.rightBtn = action.payload.rightBtn || ""
      state.modalState.content = action.payload.content || ""
      state.modalState.data = action.payload.data
    },

    closeModal(state) {
      state.modalState.isOpen = false
    },

    secondModalOpen(state) {
      state.modalState.secondOpen = true
      state.modalState.isOpen = false
    },

    secondModalClose(state) {
      state.modalState.secondOpen = false
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

export const { openModal, closeModal, secondModalOpen, secondModalClose, cartIsOpen } = ModalSlice.actions
export default ModalSlice