import { useFieldArray, useFormContext } from "react-hook-form";
import { Button, Card, Input } from "../../atom";
import { v4 } from "uuid";
import { FormProps } from "../employeForm/createEmploy.schema";
import { ManagmentEPIS } from "../managmentEPIS";

export const ManagmentActivities = () => {
  const { control, register, watch } = useFormContext<FormProps>();
  const { input, fieldset, label, checkbox } = Input();

  const { base } = Card({
    p: "extra-small",
    shadow: "none",
    border: "fine",
    radius: "sm",
  });
  const { append, remove } = useFieldArray({
    control,
    name: "activities",
  });
  return (
    <section
      className={base({
        className: "!bg-white ",
      })}
    >
      <h2 className={label()}>Quais EPIs o trabalhador usa na atividade?</h2>
      <div className="grid grid-cols-12 gap-6">
        <fieldset className="col-span-12 flex flex-row gap-4 items-center">
          <input
            id="employer_dont_use_api"
            type="checkbox"
            className={checkbox()}
            {...register("employer_dont_use_api")}
          />
          <label htmlFor="employer_dont_use_api">
            O trabalhador não usa EPI.
          </label>
        </fieldset>
      </div>
      {!watch("employer_dont_use_api") &&
        !!watch("activities")?.length &&
        watch("activities").map((item, index) => {
          const isLast = watch("activities").length === index + 1;
          return (
            <div
              className={base({
                className: "!bg-white",
              })}
              key={item.id}
            >
              <div className="grid grid-cols-12 gap-6">
                <fieldset className={fieldset({ className: "col-span-12" })}>
                  <label
                    htmlFor="activity"
                    className={label({ className: "text-dark " })}
                  >
                    Selecione a atividade:
                  </label>
                  <select
                    id="activity"
                    className={input()}
                    {...register(`activities.${index}.activity`)}
                  >
                    <option value="" disabled>
                      Selecionar atividade
                    </option>
                    <option value="activity1">Atividade 1</option>
                    <option value="activity2">Atividade 2</option>
                    <option value="activity3">Atividade 3</option>
                  </select>
                </fieldset>
                <div className="col-span-12">
                  <ManagmentEPIS index={index} />
                </div>
              </div>
              <button
                className={Button({ p: "xs" })}
                type="button"
                onClick={() => {
                  isLast
                    ? append({
                        id: v4(),
                        activity: "",
                        epis: [
                          {
                            id: v4(),
                            ca_number: "",
                            epi: "",
                          },
                        ],
                      })
                    : remove(index);
                }}
              >
                {isLast ? "Adicionar outra atividade" : "Remover atividade"}
              </button>
            </div>
          );
        })}
    </section>
  );
};
