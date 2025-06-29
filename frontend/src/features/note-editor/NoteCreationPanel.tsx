import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import NoteEditorContainer from "./NoteEditorContainer.tsx";
import { useDispatch } from 'react-redux';
import { editNewNote } from "../../state/noteEditorSlice.ts";

const NoteCreationPanel = () => {
    const dispatch = useDispatch();

    return (
        <>
                <div
                    className="flex flex-col border border-gray-200 rounded-xl text-gray-600 bg-white
                               hover:border-gray-400 hover:shadow-sm transition-all duration-150 w-full"
                    onClick={() => dispatch(editNewNote())}
                >
                    <div className="p-4 pb-16 cursor-text">
                        Start writing your thoughts, ideas, notes...
                    </div>
                    <div className="border-t border-gray-200 p-2 flex flex-row text-sm gap-2 text-gray-500">
                        <Sparkles size={18} />
                        Click to start writing with markdown support
                    </div>
                </div>
            <NoteEditorContainer />
        </>
    );
};

export default NoteCreationPanel;
