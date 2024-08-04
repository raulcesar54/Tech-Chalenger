import {
  ManagerStep,
  StepsContainer,
  UserContent,
} from "../../components/molecules";
import { Employe } from "../../components/organism";
import { useAppSelector } from "../../hooks/useRedux";

export const Home = () => {
  const selector = useAppSelector((item) => item.steps);
  const isFirstStep = selector.actualStep === 0;

  return (
    <main className="flex-col gap-8 grid grid-cols-12">
      <StepsContainer />
      <section className="gap-8 grid col-span-12 grid-cols-12">
        {isFirstStep && (
          <div className="col-span-12 md:col-span-3">
            <UserContent />
          </div>
        )}
        <div
          className={`${
            selector.actualStep === 0
              ? "col-span-12 md:col-span-9"
              : "col-span-12 md:col-span-12"
          }`}
        >
          {isFirstStep && <Employe />}
          {selector.actualStep !== 0 && (
            <div className="w-full bg-primary text-lg text-white p-3 rounded-full text-center">
              Em breve
            </div>
          )}
          <ManagerStep />
        </div>
      </section>
    </main>
  );
};
