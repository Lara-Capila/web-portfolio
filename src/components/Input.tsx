import { InputHTMLAttributes } from "react";
import Label from "./Label";

interface InProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	id: string;
	placeholder: string;
	label?: string;
}

const Input = ({ name, id, placeholder, label, ...rest }: InProps) => {
	return (
		<div className="mb-6">
			{label && <Label htmlFor={id}>{label}</Label>}
			<input
				name={name}
				id={id}
				required
				className="input"
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
};

export default Input;
