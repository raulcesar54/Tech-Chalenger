import { useFieldArray, useFormContext } from "react-hook-form";
import { v4 } from "uuid";
import { Button, Input, TextField } from "../../atom";
import { FormProps } from "../employeForm/createEmploy.schema";

export const ManagmentEPIS = ({ index }: { index: number }) => {
  const { control, register, watch } = useFormContext<FormProps>();
  const { input, fieldset, label } = Input();

  const { append, remove } = useFieldArray({
    control,
    name: `activities.${index}.epis`,
  });
  return (
    <>
      {watch(`activities.${index}.epis`)?.map((item, indexEpi) => {
        const isLast =
          watch(`activities.${index}.epis`)?.length === indexEpi + 1;
        return (
          <div
            className="w-full flex flex-col md:flex-row gap-4 items-start"
            key={item.id}
          >
            <fieldset
              className={fieldset({ className: "col-span-12 md:col-span-4" })}
            >
              <label
                htmlFor="epi"
                className={label({ className: "text-dark " })}
              >
                Selecione o EPI:
              </label>
              <select
                id="epi"
                className={input()}
                {...register(`activities.${index}.epis.${indexEpi}.epi`)}
              >
                <option disabled>Selecionar o Epi</option>
                <option value="qewroiquwerio">Calçado de segurança</option>
                <option value="1234asdflo1n0">Oculos de protecao</option>
                <option value="cxv">Cinta</option>
              </select>
            </fieldset>
            <div className="col-span-12 md:col-span-4">
              <TextField
                name={`activities.${index}.epis.${indexEpi}.ca_number`}
                label="Informe o número do CA:"
                placeholder="Número do CA"
              />
            </div>

            <button
              className={Button({
                p: "xs",
                className: "col-span-12 md:col-span-4 max-h-[40px] mt-[35px]",
              })}
              type="button"
              onClick={() => {
                isLast
                  ? append({
                      id: v4(),
                      ca_number: "",
                      epi: "",
                    })
                  : remove(indexEpi);
              }}
            >
              {isLast ? "Adicionar EPI" : "Remover EPI"}
            </button>
          </div>
        );
      })}
    </>
  );
};
