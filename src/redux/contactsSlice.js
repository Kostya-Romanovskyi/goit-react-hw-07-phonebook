import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contactsState',

  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [addContact.pending]: handlePending,
    [deleteContact.pending]: handlePending,
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,

    //   Функціонал першого маунту сторінки

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    // Функціонал додавання контакту

    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const alertContact = state.contacts.find(
        contact => contact.name === action.payload.name
      );

      if (alertContact) {
        return alert(`${action.payload.name} is already in contacts`);
      }

      state.contacts.push(action.payload);
    },

    // Функціонал видалення контакту

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
  },
});

export default contactsSlice.reducer;

//Selectors
export const getContacts = state => state.contactsState.contacts;
export const getLoading = state => state.contactsState.isLoading;
export const getError = state => state.contactsState.error;
