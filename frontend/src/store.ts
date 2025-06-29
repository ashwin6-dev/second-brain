import { configureStore } from '@reduxjs/toolkit';
import noteEditorReducer from "./state/noteEditorSlice.ts";
import inboxReducer from "./state/inboxSlice.ts";

export const store = configureStore({
    reducer: {
        noteEditor: noteEditorReducer,
        inbox: inboxReducer
    },
});