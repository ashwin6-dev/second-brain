import InboxItem from "./InboxItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editExistingNote } from "../../state/noteEditorSlice.ts";
import {updateInbox} from "../../state/inboxSlice.ts";

const Inbox = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.inbox.inbox)

    useEffect(() => {
        dispatch(updateInbox())
    }, []);

    return (
        <div className="flex flex-col gap-2">
            {notes.map((note, idx) => (
                <div onClick={() => dispatch(editExistingNote(note))} key={idx}>
                    <InboxItem
                        key={idx}
                        title={note.title}
                        content={note.content}
                        created={note.createdDate}
                    />
                </div>
            ))}
        </div>
    );
};

export default Inbox;
