import { Brain } from "lucide-react";

const Navbar = ({ children }) => {
    return (
        <div className='flex flex-col gap-3 pt-2 bg-white border-b-1 border-b-gray-200 px-25 w-screen'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <div className='bg-green-500 text-white rounded-lg p-1'>
                        <Brain className='w-6 h-6' />
                    </div>
                    <div>
                        <p className='text-xl font-bold tracking-tighter'>Second Brain</p>
                        <p className='text-sm text-gray-500'>Personal, organised knowledge base</p>
                    </div>
                </div>
            </div>
            <div className='flex'>
                { children }
            </div>
        </div>
    )
}

export default Navbar;