import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './features/modals/modalSlice';
import { api } from './features/users/usersApi';

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
