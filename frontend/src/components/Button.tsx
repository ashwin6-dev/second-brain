const Button = ({ color = "blue", size = "md", onClick = () => {}, children }) => {
    const colorClasses = {
        blue: "bg-blue-500 hover:bg-blue-600 text-white",
        red: "bg-red-500 hover:bg-red-600 text-white",
        green: "bg-green-500 hover:bg-green-600 text-white",
        gray: "bg-gray-500 hover:bg-gray-600 text-white"
    };

    const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg"
    };

    return (
        <button
            className={`rounded-md transition-colors duration-300 ${colorClasses[color]} ${sizeClasses[size]}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
