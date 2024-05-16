import { createSlice } from '@reduxjs/toolkit';

import { IModal } from '../../types';

const initialState: IModal = {
  isOpen: false,
};

const usersSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state) {
      state.isOpen = true;
    },
    hideModal(state) {
      state.isOpen = false;
    },
  },
});

export const { showModal, hideModal } = usersSlice.actions;

export default usersSlice.reducer;
