import { useFormContext } from "react-hook-form";
import { tv } from "tailwind-variants";
import { InputProps } from "./interface";

export const SelectStyle = tv({
  variants: {
    active: {
      false: {
        label: "flex-row-reverse px-0 pl-[3px] pr-3",
      },
      true: {
        label: "justify-start ",
      },
    },
  },
  slots: {
    fieldset: "flex flex-col gap-2",
    label:
      "text-dark transition duration-150 ease-out md:ease-in cursor-pointer rounded-full transition flex flex-row items-center justify-end text-xs px-4 py-[3px] gap-1 pr-[2px] bg-medium-ligth-gray",
    radioContainer: "flex flex-row gap-16 ",
  },
});

export const Select = ({
  name,
  label: labelText,
  mask,
  ...props
}: InputProps) => {
  const { label, fieldset } = SelectStyle();
  const { register, formState, watch } = useFormContext();
  const { errors } = formState;

  const nameArray = name.split(".");

  const getErrorMessage = (errors: any, nameArray: string[]) => {
    return nameArray.reduce((errorObject, key) => {
      return errorObject?.[key];
    }, errors);
  };

  const errorMessage = getErrorMessage(errors, nameArray);
  return (
    <fieldset className={fieldset()}>
      <label
        htmlFor={name}
        className={label({
          active: watch(name),
          className: "!justify-start jus",
        })}
      >
        {watch(name) ? "Ativo" : "Inativo"}
        <div className="w-4 h-4 bg-primary rounded-full"></div>
      </label>
      <input
        id={name}
        className="hidden"
        type="checkbox"
        {...register(name)}
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
