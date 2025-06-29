const NavItem = ({ selected = false, children }) => {
    return (
        <div className={
            `pl-2 pr-4 py-1 transition cursor-pointer flex items-center gap-2 border-b-2 
            ${ selected ? 'border-b-green-500': 'border-b-white'}
            ${ selected ? 'text-black': 'text-gray-600 hover:text-black' }
            `}>
            { children }
        </div>
    )
}

export default NavItem;