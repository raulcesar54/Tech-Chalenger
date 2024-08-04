import { Button } from "../../atom";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { backStep, nextStep } from "../../../redux/slices/steps.slice";

export const ManagerStep = () => {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((item) => item.steps);
  const isMediumSteps = selector.actualStep > 0;
  const isLastStep = selector.actualStep < 8;
  return (
    <div className="flex w-full justify-between mt-8">
      {isMediumSteps ? (
        <button
          onClick={() => dispatch(backStep())}
          className={Button({
            p: "xs",
            className: "w-fit h-fit bg-primary text-white",
          })}
        >
          Passo anterior
        </button>
      ) : (
        <div></div>
      )}
      {isLastStep ? (
        <button
          disabled={!selector.enabledSteps}
          onClick={() => dispatch(nextStep())}
          className={Button({
            p: "xs",
            className:
              "w-fit h-fit mb-4 bg-primary text-white disabled:bg-medium-gray",
            disabled: true,
          })}
        >
          Próximo passo
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
};
