import ActionButton from "./ActionButton.tsx";
import { Plus, Inbox } from "lucide-react";

const Actions = () => {
    return (
        <div className="flex flex-col gap-2">
            <ActionButton>
                <Plus className="w-4 h-4 mr-2" />
                <p>New Note</p>
            </ActionButton>
            <ActionButton>
                <Inbox className="w-4 h-4 mr-2" />
                <p>Organise Inbox</p>
            </ActionButton>
        </div>
    )
}

export default Actions;