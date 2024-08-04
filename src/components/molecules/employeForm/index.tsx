import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Card, Input, Select, TextField } from "../../atom";
import { createEmployeFormSchema, FormProps } from "./createEmploy.schema";
import { ManagmentActivities } from "../managmentActivities";
import { api } from "../../../service/api";
import { v4 } from "uuid";
import { toast } from "sonner";
import { useShowForm } from "../../../hooks/useShowForm";

export const EmployeForm = () => {
  const { input, fieldset, label, radioContainer } = Input();
  const { handleHiddenForm } = useShowForm();
  const { base } = Card({
    p: "extra-small",
    shadow: "none",
    border: "fine",
    radius: "sm",
  });
  const handleSaveForm = async (data: FormProps) => {
    toast.promise(async () => await api.insert.employer<FormProps>(data), {
      loading: "Carregando...",
      success: () => {
        handleHiddenForm();
        return `Funcionário cadastrado com sucessod`;
      },
      error: "Erro ao cadastrar funcionário",
    });
  };
  const methods = useForm<FormProps>({
    defaultValues: {
      active: false,
      activities: [
        {
          id: v4(),
          activity: "",
          epis: [
            {
              id: v4(),
            },
          ],
        },
      ],
    },
    resolver: zodResolver(createEmployeFormSchema),
  });
  const { register } = methods;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSaveForm)}>
        <div className="p-4 flex flex-col gap-4">
          <section
            className={base({
              className: "flex !bg-white flex-row justify-between w-full",
            })}
          >
            <h2 className={label({ className: "col-span-10" })}>
              O trabalhador está ativo ou inativo?
            </h2>
            <div className=" gap-6">
              <Select name="active" />
            </div>
          </section>
          <section
            className={base({
              className: "!bg-white ",
            })}
          >
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <TextField name="name" placeholder="Nome" label="Nome" />
              </div>
              <div className="flex flex-col col-span-12 md:col-span-6">
                <label className={label({ className: "medium" })}>Sexo</label>
                <fieldset className={radioContainer({ className: "mt-4" })}>
                  <div className="flex flex-row gap-1">
                    <input
                      type="radio"
                      id="feminino"
                      {...register("gender")}
                      value="Feminino"
                    />
                    <label className={label()} htmlFor="html">
                      Feminino
                    </label>
                  </div>
                  <div className="flex flew-row gap-1">
                    <input
                      type="radio"
                      id="masculiino"
                      {...register("gender")}
                      value="Masculino"
                    />
                    <label className={label()} htmlFor="css">
                      Masculino
                    </label>
                  </div>
                </fieldset>
              </div>
              <div className="col-span-12 md:col-span-6">
                <TextField
                  name="CPF"
                  mask={["999.999.999-99"]}
                  placeholder="CPF"
                  label="CPF"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <TextField
                  type="date"
                  name="birth_date"
                  placeholder="dd/MM/yyyy"
                  label="Data de Nascimento"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <TextField name="RG" placeholder="RG" label="RG" />
              </div>
              <fieldset
                className={fieldset({ className: "col-span-6 !bg-white " })}
              >
                <label
                  htmlFor="position"
                  className={label({ className: "text-dark " })}
                >
                  Cargo
                </label>
                <select
                  id="position"
                  className={input({ className: "h-[40px]" })}
                  defaultValue=""
                  {...register("position")}
                >
                  <option value="" selected disabled>
                    Selecione um cargo
                  </option>
                  <option value="front-end">front-end</option>
                  <option value="react">react</option>
                  <option value="node">node</option>
                </select>
              </fieldset>
            </div>
          </section>
          <ManagmentActivities />
          <button className={Button({ p: "xs" })} type="submit">
            Salvar
          </button>
        </div>
      </form>
    </FormProvider>
  );
};
