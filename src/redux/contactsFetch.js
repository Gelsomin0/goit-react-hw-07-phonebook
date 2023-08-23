import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
      const contacts = await fetch('https://64e5dac609e64530d17f25d4.mockapi.io/api/v1/contacts').then((res) => res.json());
      return contacts;
  }
)