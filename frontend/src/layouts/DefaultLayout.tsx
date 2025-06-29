const DefaultLayout = ({ children }) => {
    return (
        <div className='flex bg-gray-50 h-screen w-screen'>
            { children }
        </div>
    )
}

export default DefaultLayout;