import { configureStore } from '@reduxjs/toolkit';
import noteEditorReducer from "./state/noteEditorSlice.ts";
import inboxReducer from "./state/inboxSlice.ts";
import inputModalReducer from "./state/inputModalSlice.ts";

export const store = configureStore({
    reducer: {
        noteEditor: noteEditorReducer,
        inbox: inboxReducer,
        inputModal: inputModalReducer
    },
});