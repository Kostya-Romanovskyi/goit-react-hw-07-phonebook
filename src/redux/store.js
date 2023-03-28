import { configureStore } from '@reduxjs/toolkit';

import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contactsState: contactsSlice.reducer,
    filterQuery: filterSlice.reducer,
  },
});
