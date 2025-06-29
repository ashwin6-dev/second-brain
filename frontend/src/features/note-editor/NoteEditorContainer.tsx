import { useSelector, useDispatch } from 'react-redux';
import { closeEditor } from "../../state/noteEditorSlice.ts";
import NoteEditor from "./NoteEditor.tsx";
import React from "react";

const NoteEditorContainer = () => {
    const dispatch = useDispatch();
    const editing = useSelector(state => state.noteEditor.editing);
    const note = useSelector(state => state.noteEditor.note);

    if (editing) {
        return <NoteEditor
            content={note.content}
            noteTitle={note.title}
            onClose={() => dispatch(closeEditor())}/>
    }

    return <></>
}

export default NoteEditorContainer;