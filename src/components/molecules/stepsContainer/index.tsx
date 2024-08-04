import { useAppSelector } from "../../../hooks/useRedux";
import { StepItem } from "../../atom";

export const StepsContainer = () => {
  const selector = useAppSelector((selector) => selector.steps);
  return (
    <section className="p-4 py-6 bg-white min-w-fit flex flex-row justify-start items-start rounded-[20px] col-span-12 relative">
      <div className="flex flex-row gap-12 relative items-start ">
        {[...Array(9).keys()].map((_, index) => (
          <StepItem
            label={`Item ${index + 1}`}
            isActive={selector.actualStep === index}
            disabled={selector.enabledSteps}
            enabled={selector.enabledSteps}
            stepFinished={selector.actualStep > index}
            key={index}
          />
        ))}
        <div className="absolute w-full flex py-5 items-center z-0">
          <div className="flex-grow  border-dashed border-2 mt-2 z-0 border-primary"></div>
        </div>
      </div>
    </section>
  );
};
