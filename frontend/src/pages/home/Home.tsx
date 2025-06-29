import NoteCreationPanel from "../../features/NoteCreationPanel.tsx";
import DefaultLayout from "../../layouts/DefaultLayout.tsx";
import Inbox from "./Inbox.tsx";
import LeftPanel from "./LeftPanel.tsx";

const Home = () => {
    return (
        <DefaultLayout>
            <LeftPanel />
            <div className='w-screen h-screen flex flex-col gap-12 py-12 items-center'>
                <div className='w-3/4'>
                    <div className='mb-2'>
                        <p className='text-4xl tracking-tighter'>Your Second Brain</p>
                        <p className='text-gray-500'>Your personal knowledge base. Write, organise, and connect your ideas with full markdown support.</p>
                    </div>
                    <NoteCreationPanel />
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