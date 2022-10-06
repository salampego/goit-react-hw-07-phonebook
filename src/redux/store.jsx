import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contactsItem: contactReducer,
  },
});
