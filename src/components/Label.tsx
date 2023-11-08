import { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
	children: ReactNode;
}

const Label = ({ htmlFor, children, ...rest }: LabelProps) => {
	return (
		<label
			htmlFor={htmlFor}
			className="text-white block mb-2 text-sm font-medium"
			{...rest}
		>
			{children}
		</label>
	);
};

export default Label;
