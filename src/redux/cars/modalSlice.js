import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  currentCar: null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.currentCar = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.currentCar = null
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;