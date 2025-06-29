import ActionButton from "./ActionButton.tsx";
import { Target, Folder, Book, Inbox } from "lucide-react";
import InputModalContainer from "../../features/input-modal/InputModalContainer.tsx";
import { useDispatch } from "react-redux";
import {openInputModal} from "../../state/inputModalSlice.ts";
import {createCategory} from "../../services/category.ts";

const Actions = () => {
    const dispatch = useDispatch();

    const create = (category: string)=> {
        const categoryDescriptions = {
            'Projects': 'Projects have specific outcomes and deadlines. What would you like to call this project?',
            'Areas': 'Areas are ongoing responsibilities without specific end dates. What area would you like to manage?',
            'Resources': 'Resources are reference materials you want to keep for future use. What resource are you adding?'
        }

        dispatch(openInputModal({
            title: `Create a new ${category}`,
            label: 'Name',
            prompt: categoryDescriptions[category],
            onSubmit: (name) => { createCategory(category, name) }
        }))
    }

    return (
        <div className="flex gap-2">
            <ActionButton>
                <Inbox className="w-4 h-4" />
                <p>Organise Inbox</p>
            </ActionButton>
            <ActionButton onClick={() => create("Projects")}>
                <Target className="w-4 h-4" />
                <p>New Project</p>
            </ActionButton>
            <ActionButton onClick={() => create("Areas")}>
                <Folder className="w-4 h-4" />
                <p>New Area</p>
            </ActionButton>
            <ActionButton onClick={() => create("Resources" )}>
                <Book className="w-4 h-4" />
                <p>New Resource</p>
            </ActionButton>

            <InputModalContainer />
        </div>
    )
}

export default Actions;