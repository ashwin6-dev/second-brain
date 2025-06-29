import Navbar from "../components/Navbar.tsx";
import NavItem from "../components/NavItem.tsx";
import { Target, Folder, Book, Inbox, Archive } from "lucide-react";

const DefaultLayout = ({ children }) => {
    return (
        <div className='flex flex-col bg-gray-50 h-screen w-screen'>
            <Navbar>
                <NavItem selected={true}>
                    <Inbox className="w-4 h-4" />
                    Inbox
                </NavItem>
                <NavItem>
                    <Target className="w-4 h-4" />
                    Projects
                </NavItem>
                <NavItem>
                    <Folder className="w-4 h-4" />
                    Areas
                </NavItem>
                <NavItem>
                    <Book className="w-4 h-4" />
                    Resources
                </NavItem>
                <NavItem>
                    <Archive className="w-4 h-4" />
                    Archive
                </NavItem>
            </Navbar>
            { children }
        </div>
    )
}

export default DefaultLayout;