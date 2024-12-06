import { useFormContext } from "react-hook-form";
import { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/Radix/Form";
import Input from "@/components/Radix/Input";

type IProps<T> = {
  name: keyof T;
  label?: string;
  className?: string;
  inputClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput = <T,>({
  name,
  label,
  className,
  inputClassName,
  ...rest
}: IProps<T>) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("col-span-1 text-start", className)}>
          <FormLabel className="flex gap-1 font-lexend text-sm font-normal">
            {label}
          </FormLabel>
          <FormControl>
            <Input className={inputClassName} {...field} {...rest} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
