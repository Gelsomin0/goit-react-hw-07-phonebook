import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
      const contacts = await fetch('https://64e5dac609e64530d17f25d4.mockapi.io/api/v1/contacts').then((res) => res.json());
      return contacts;
  }
)
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact) => {
        const response = await fetch('https://64e5dac609e64530d17f25d4.mockapi.io/api/v1/contacts', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(newContact)
        });
        return response.json();
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, {dispatch}) => {
        const response = await fetch(`https://64e5dac609e64530d17f25d4.mockapi.io/api/v1/contacts/${id}`, {
            method: 'DELETE'
        });

        return response.json();
    }
)