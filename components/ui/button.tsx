import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  const baseStyles = "px-10 py-1.5 font-medium transition-all duration-300 active:scale-95";
  
  const variants = {
    primary: "rounded-full border border-white bg-transparent text-white hover:bg-white hover:text-black",
    secondary: "rounded-full border-none bg-red-600 text-white hover:bg-red-700 shadow-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};