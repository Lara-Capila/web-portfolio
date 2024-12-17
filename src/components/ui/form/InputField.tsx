import { forwardRef } from "react";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";
import { Input } from "../Input";
import { Label } from "../Label";

interface InputFieldProps {
  id: string;
  label: string;
  type?: string;
  errors?: FieldErrors;
  register: UseFormRegisterReturn;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ id, label, type = "text", errors, register }, ref) => {
    return (
      <div className="flex gap-1 flex-col">
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type={type} {...register} ref={ref} />
        {errors?.[id] && (
          <span className="text-red-400 text-xs">
            {errors[id]?.message as string}
          </span>
        )}
      </div>
    );
  }
);

InputField.displayName = "InputField"; // Evita warnings no DevTools
