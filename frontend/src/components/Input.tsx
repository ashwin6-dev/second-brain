import React from "react";

const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg"
};

const Input = ({ size = "md", className = "", ...props }) => {
    return (
        <input
            {...props}
            className={`border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses[size]} ${className}`}
        />
    );
};

export default Input;
