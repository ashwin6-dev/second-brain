import NoteCreationPanel from "../../features/note-editor/NoteCreationPanel.tsx";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";
import Inbox from "./Inbox.tsx";
import LeftPanel from "./LeftPanel.tsx";
import Actions from "./Actions.tsx";

const Home = () => {
    return (
        <DefaultLayout>
            <div className='w-screen h-screen flex flex-col gap-12 py-12 items-center'>
                <div className='w-3/4'>
                    <div className='mb-2'>
                        <p className='text-4xl tracking-tighter'>Capture your thoughts</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <NoteCreationPanel />
                        <Actions />
                    </div>
                </div>
                <div className='w-3/4'>
                    <div className='mb-2'>
                        <p className='text-2xl tracking-tighter'>Inbox</p>
                    </div>
                    <Inbox />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Home;