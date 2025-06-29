const ActionButton = ({ onClick = () => {}, children }) => {
    return (
        <div
            className='flex flex-row gap-2 items-center rounded-md border-1 border-gray-200 px-4 py-2 text-gray-500 text-sm
                       hover:bg-gray-100 transition font-medium'
            onClick={onClick}
        >
            { children }
        </div>
    )
}

export default ActionButton;