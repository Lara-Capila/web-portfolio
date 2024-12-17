import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className="bg-transparent rounded-md border border-[#737373c4] focus:border-[#9f9d9dc4] outline-none py-1 pl-2"
      />
    );
  }
);

Input.displayName = "Input"; // Para evitar warnings no React DevTools
