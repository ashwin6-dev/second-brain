import { CalendarDays } from "lucide-react";

const InboxItem = ({ title, content, created }) => {
    return (
        <div className="border-l-4 border-green-500 bg-white p-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <div className="flex flex-col gap-1">
                <h3 className="text-gray-800 text-base font-semibold">{title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{content}</p>
                <div className="flex items-center gap-1 text-xs text-gray-400 mt-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{new Date(created).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    );
};

export default InboxItem;
