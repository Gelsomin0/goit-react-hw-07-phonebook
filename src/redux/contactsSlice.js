import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsFetch";

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
        }
    }
});

export const getContactList = state => state.contacts.items;