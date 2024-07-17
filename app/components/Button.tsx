import React from 'react';

interface ButtonProps {
    className?: string;
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
    return (
        <button
            type="button"
            className={`rounded-lg ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
