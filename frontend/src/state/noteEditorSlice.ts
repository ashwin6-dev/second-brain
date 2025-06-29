import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    editing: false,
    note: {
        title: "",
        content: ""
    },
};

const editNewNoteReducer = (state) => {
    state.editing = true;
    state.note = {
        title: "",
        content: ""
    }
}

const editExistingNoteReducer = (state, action) => {
    state.editing = true;
    state.note = action.payload;
}

const closeEditorReducer = (state) => {
    state.editing = false;
}

const noteEditorSlice = createSlice({
    name: 'noteEditor',
    initialState,
    reducers: {
        editNewNote: editNewNoteReducer,
        editExistingNote: editExistingNoteReducer,
        closeEditor: closeEditorReducer,
    }
});

export const { editNewNote, editExistingNote, closeEditor } = noteEditorSlice.actions;
export default noteEditorSlice.reducer;