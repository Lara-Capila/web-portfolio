import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, FieldValues, Path } from "react-hook-form";
import { Input } from "../Input";
import { Label } from "../Label";

export interface InputFieldProps<T extends FieldValues> {
  errors: FieldErrors<T>;
  id: Path<T>;
  type?: HTMLInputTypeAttribute | undefined;
}

export const InputField = <T extends FieldValues>({
  errors,
  id,
}: InputFieldProps<T>) => {
  return (
    <div className="flex gap-1 flex-col">
      <Label htmlFor="userName">Nome</Label>
      <Input placeholder="" type="text" id={id} name={id} />
      {errors?.userName && (
        <span className="text-red-400 text-xs">
          {errors?.userName?.message as string}
        </span>
      )}
    </div>
  );
};
