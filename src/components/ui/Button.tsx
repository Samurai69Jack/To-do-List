import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;