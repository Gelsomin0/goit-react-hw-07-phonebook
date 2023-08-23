import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        changeFilterState: (state, action) => {
            return state = action.payload;
        }
    }
});

export const { changeFilterState } = filterSlice.actions;
export const getFilter = state => state.filter;