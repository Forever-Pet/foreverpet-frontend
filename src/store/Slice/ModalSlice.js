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
    }
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
    }

  }
})

export const { openModal, closeModal, secondModalOpen, secondModalClose } = ModalSlice.actions
export default ModalSlice