import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contactsState',

  initialState: {
    contacts: {
      item: [],
      isLoading: false,
      error: null,
    },
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
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.item = action.payload;
    },

    // Функціонал додавання контакту

    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;

      const alertContact = state.contacts.item.find(
        contact => contact.name === action.payload.name
      );

      if (alertContact) {
        return alert(`${action.payload.name} is already in contacts`);
      }

      state.contacts.item.push(action.payload);
    },

    // Функціонал видалення контакту

    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;

      const index = state.contacts.item.findIndex(
        contact => contact.id === action.payload.id
      );

      state.contacts.item.splice(index, 1);
    },
  },
});

export default contactsSlice.reducer;

//Selectors
export const getContacts = state => state.contactsState.contacts.item;
export const getLoading = state => state.contactsState.contacts.isLoading;
export const getError = state => state.contactsState.contacts.error;
