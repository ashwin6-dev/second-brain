import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getInbox} from "../services/inbox.ts";
import type {Note} from "../../../common/note.ts";

const initialState = {
    inbox: []
};

export const updateInbox = createAsyncThunk<Note[]>(
    'inbox/update',
    getInbox
)

const inboxSlice = createSlice({
    name: 'inbox',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(updateInbox.fulfilled, (state, action) => {
                state.inbox = action.payload;
            })
    }
});

export default inboxSlice.reducer;