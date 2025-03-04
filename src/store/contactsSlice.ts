import { Contact } from "../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store.ts";

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

export const selectContacts = (state: RootState) => state.contacts.contacts;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload);
    },
  }
});

export const contactsReducer = contactsSlice.reducer;
export const {addContact} = contactsSlice.actions;