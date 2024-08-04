import { tv } from "tailwind-variants";
import buildFillIcon from "../../../assets/build-filled-icon.png";

export const StepItemContainer = tv({
  variants: {
    active: {
      true: {
        base: "border-black border-2 !bg-primary",
        label: "text-primary",
      },
    },
    enabled: {
      true: {
        base: "!bg-primary",
        label: "text-primary",
      },
    },
    disabled: {
      true: {
        base: "bg-medium-ligth-gray",
        label: "text-primary",
      },
    },
  },
  slots: {
    base: "bg-medium-ligth-gray w-16 h-16 rounded-[20px] flex justify-center items-center shadow-md",
    label: "text-medium-ligth-gray",
  },
});

export const StepItem = ({
  label,
  isActive,
  disabled,
  enabled,
  stepFinished,
}: {
  label: string;
  isActive: boolean;
  enabled: boolean;
  disabled: boolean;
  stepFinished: boolean;
}) => {
  const { base, label: labelStyled } = StepItemContainer();
  return (
    <div className="flex flex-col z-10 justify-center items-center">
      <div
        className={base({
          active: isActive,
          disabled: disabled,
          enabled: enabled,
        })}
      >
        <img src={buildFillIcon} alt="icon" />
      </div>
      <small className={labelStyled({ active: isActive, enabled: enabled })}>
        {label}
      </small>
      {stepFinished && (
        <small
          className={labelStyled({
            className: "text-black font-medium",
          })}
        >
          Concluído
        </small>
      )}
    </div>
  );
};
