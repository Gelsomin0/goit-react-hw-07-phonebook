import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsFetch";

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.fulfilled]: (state, action) => {
            state.items = action.payload;
        },
        [addContact.fulfilled]: (state, action) => {
            state.items.push(action.payload);
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }
    }
});

export const getContactList = state => state.contacts.items;