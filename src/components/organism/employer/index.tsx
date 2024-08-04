import backIcon from "../../../assets/back-icon.png";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { useShowForm } from "../../../hooks/useShowForm";
import { handleEnableDisabledSteps } from "../../../redux/slices/steps.slice";
import { Card, SelectStyle, Input } from "../../atom";
import { AddEmployeTrigger, ListEmployer } from "../../molecules";
import { EmployeForm } from "../../molecules/employeForm";

export const Employe = () => {
  const { base, header } = Card({ p: "none" });
  const { label, fieldset } = SelectStyle();
  const { label: labelDefault } = Input();

  const { showForm, handleHiddenForm } = useShowForm();
  const selector = useAppSelector((state) => state.steps);
  const dispatch = useAppDispatch();

  return (
    <main
      className={base({
        className: "!bg-white h-full",
      })}
    >
      <header className={header({ className: "text-[28px]" })}>
        {showForm && (
          <button onClick={handleHiddenForm}>
            <img src={backIcon} />
          </button>
        )}
        {showForm && "Adicionar"} Funcionário(s)
      </header>
      <div className="overflow-scroll overflow-x-hidden">
        {!showForm ? (
          <>
            <div className="px-8 mb-4 mt-2">
              <AddEmployeTrigger />
            </div>
            <ListEmployer />
            <div
              onClick={() => dispatch(handleEnableDisabledSteps())}
              className="mt-4 px-8 w-full flex flex-row gap-4 items-center justify-end ml-auto cursor-pointer pb-4"
            >
              <p className={labelDefault()}>A etapa está concluída?</p>
              <fieldset className={fieldset({ className: "w-fit " })}>
                <label
                  htmlFor="id"
                  className={label({
                    active: Boolean(selector.enabledSteps),
                    className: "!justify-start jus",
                  })}
                >
                  {selector.enabledSteps ? "Sim" : "Não"}
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </label>
              </fieldset>
            </div>
          </>
        ) : (
          <EmployeForm />
        )}
      </div>
    </main>
  );
};
