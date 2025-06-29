import { MDXEditor } from '@mdxeditor/editor'
import {
    headingsPlugin,
    quotePlugin,
    thematicBreakPlugin,
    listsPlugin,
    toolbarPlugin,
    UndoRedo,
    BoldItalicUnderlineToggles,
    BlockTypeSelect
} from '@mdxeditor/editor'
import { X, Maximize2, Minimize2 } from "lucide-react"

import '@mdxeditor/editor/style.css'
import * as React from "react"
import Button from "../../components/Button.tsx";
import { createNote } from "../../services/inbox.ts";
import {updateInbox} from "../../state/inboxSlice.ts";
import { useDispatch } from 'react-redux';

interface MDXEditorMethods {
    getMarkdown(): string;
}

function NoteEditor({ content = "", noteTitle = "", onClose = () => {}, initialFullscreen = false }) {
    const ref = React.useRef<MDXEditorMethods>(null)
    const [fullscreen, setFullscreen] = React.useState(initialFullscreen)
    const [title, setTitle] = React.useState(noteTitle)
    const dispatch = useDispatch()

    const placeholder = (
        <div>
            <p># Your Note Title</p>
            <p>Start writing your thoughts here...</p>
            <p>You can use <strong>markdown</strong> formatting:</p>
            <ul className="list-disc pl-5">
                <li><strong>Bold text</strong> with double asterisks</li>
                <li><em>Italic text</em> with single asterisks</li>
                <li><code>Code snippets</code> with backticks</li>
                <li>&gt; Blockquotes with greater than</li>
                <li><a href="https://example.com">Links</a> with brackets</li>
                <li>Lists with dashes or numbers</li>
            </ul>
        </div>
    );

    const saveNote = async () => {
        const markdown = ref.current?.getMarkdown() || '';
        if (!title.trim()) return alert("Please enter a title.");
        await createNote({ title, content: markdown });
        dispatch(updateInbox());
        onClose();
    }

    return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose} />

            <div className={`fixed z-50 bg-white border rounded-xl border-gray-200 shadow-2xl transition-all duration-300 ${
                fullscreen
                    ? "inset-4 h-[95vh]"
                    : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl h-[80vh]"
            } flex flex-col`}>
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                    <input
                        className="text-lg font-medium text-gray-800 bg-transparent border-b border-gray-200 focus:outline-none focus:border-gray-400 w-full"
                        placeholder="New Note Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className="flex items-center gap-2 ml-4">
                        <button
                            onClick={() => setFullscreen(!fullscreen)}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title={fullscreen ? "Minimize" : "Maximize"}
                        >
                            {fullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            title="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="prose max-w-none w-full flex-grow overflow-auto">
                    <MDXEditor
                        ref={ref}
                        markdown={content}
                        placeholder={placeholder}
                        plugins={[
                            headingsPlugin(),
                            listsPlugin(),
                            quotePlugin(),
                            thematicBreakPlugin(),
                            toolbarPlugin({
                                toolbarContents: () => (
                                    <>
                                        <UndoRedo />
                                        <BoldItalicUnderlineToggles />
                                        <BlockTypeSelect />
                                    </>
                                )
                            })
                        ]}
                    />
                </div>

                <div className="p-4 border-t border-gray-200">
                    <Button color="green" onClick={saveNote}>Save note</Button>
                </div>
            </div>
        </>
    )
}

export default NoteEditor
