import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsFetch";
import toast, { Toaster } from 'react-hot-toast';

const addedContact = ({ name }) => toast.success(`Contact ${name} is added`);
const deletedContact = ({ name }) => toast.error(`Contact ${name} is deleted`);

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
            addedContact(action.payload);
            state.items.push(action.payload);
        },
        [deleteContact.fulfilled]: (state, action) => {
            const contactToDelete = state.items.filter(item => item.id === action.payload.id);
            deletedContact(contactToDelete[0]);
            state.items = state.items.filter(item => item.id !== action.payload.id);
        }
    }
});

export const getContactList = state => state.contacts.items;