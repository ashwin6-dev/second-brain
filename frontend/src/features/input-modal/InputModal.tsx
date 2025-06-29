import * as React from "react";

const InputModal = ({ onClose, onSubmit, title = "Enter Info", prompt = "Please enter a value:", label="Name" }) => {
    const [inputValue, setInputValue] = React.useState("");

    const handleSubmit = () => {
        onSubmit(inputValue);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose} />
            <div className="fixed left-0 top-0 flex justify-center items-center w-screen h-screen z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-sm text-gray-600 mb-4">{prompt}</p>
                    <span className="text-sm">{label}</span>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full px-4 py-1 border border-gray-200 rounded-md mb-4 transition focus:outline-none focus:border-gray-500"
                    />
                    <div className="flex justify-end space-x-2">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 text-sm bg-black text-white rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 text-sm bg-green-500 text-white rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InputModal;
