import { useFormContext } from "react-hook-form";
import { tv } from "tailwind-variants";
import { useHookFormMask } from "use-mask-input";
import { InputProps } from "./interface";

export const Input = tv({
  variants: {
    error: {
      true: {
        input: "ring-red-400",
      },
    },
  },
  slots: {
    input: "ring ring-1 ring-primary rounded-[12px] py-[8.5px] px-3 font-4",
    fieldset: "flex flex-col gap-2",
    label: "text-dark",
    radioContainer: "flex flex-row gap-16 ",
    checkbox:
      "accent-primary appearance-none w-4 h-4 ring-primary ring-1 checked:bg-primary rounded-sm bg-white",
  },
});

export const TextField = ({
  name,
  label: labelText,
  mask,
  ...props
}: InputProps) => {
  const { label, fieldset, input } = Input();
  const { register, formState } = useFormContext();
  const { errors } = formState;

  const nameArray = name.split(".");

  const getErrorMessage = (errors: any, nameArray: string[]) => {
    return nameArray.reduce((errorObject, key) => {
      return errorObject?.[key];
    }, errors);
  };

  const errorMessage = getErrorMessage(errors, nameArray);
  const registerWithMask = useHookFormMask(register);
  return (
    <fieldset className={fieldset()}>
      <label htmlFor={name} className={label({ className: "text-dark " })}>
        {labelText}
      </label>
      <input
        id={name}
        className={input({
          error: Boolean(errors[name]?.message || errorMessage?.message),
        })}
        {...(!!mask
          ? {
              ...registerWithMask(name, mask, { required: true }),
            }
          : { ...register(name) })}
        {...props}
      />
      {(errorMessage?.message || errors[name]?.message) && (
        <span className="text-red-400">
          {String((errors[name] || errorMessage)?.message)}
        </span>
      )}
    </fieldset>
  );
};
