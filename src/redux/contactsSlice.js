import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contactsState',

  initialState: { contacts: [] },

  reducers: {
    addContact(state, action) {
      const alertContact = state.contacts.find(
        contact => contact.name === action.payload.name
      );

      if (alertContact) {
        return alert(`${action.payload.name} is already in contacts`);
      }

      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        task => task.contactID === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

//Selector
export const getContacts = state => state.contactsState.contacts;
