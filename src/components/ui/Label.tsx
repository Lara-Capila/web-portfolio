import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ htmlFor, children, ...rest }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className="opacity-70 text-sm lg:text-base ">
      {children}
    </label>
  );
};
