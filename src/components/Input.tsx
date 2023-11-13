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
				data-disabled={rest.disabled}
				name={name}
				id={id}
				required
				className="input data-[disabled=true]:bg-gray-500"
				placeholder={placeholder}
				{...rest}
			/>
		</div>
	);
};

export default Input;
