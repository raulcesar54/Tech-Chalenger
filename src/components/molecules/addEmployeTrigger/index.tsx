import useSWR from "swr";
import { useShowForm } from "../../../hooks/useShowForm";
import { api } from "../../../service/api";
import { ResponseEmployer } from "../../../types/global";
import { API_KEY_SWR } from "../../../types/routes";
import { Button } from "../../atom";
import { useMemo } from "react";

export const AddEmployeTrigger = () => {
  const { handleShowForm } = useShowForm();
  const { data } = useSWR(
    API_KEY_SWR.LIST_EMPLOYER,
    api.list.employer<ResponseEmployer[]>
  );
  const totalActive = useMemo(() => {
    const onlyActives = data?.filter((item) => item.active);
    return onlyActives;
  }, [data]);
  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-4">
      <div className="col-span-12 row-span-1">
        <button className={Button()} onClick={handleShowForm}>
          + Adicionar Funcionário
        </button>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="flex flex-col md:flex-row gap-2">
          <button className={Button({ p: "xs" })}>Ver apenas ativos</button>
          <button className={Button({ p: "xs", disabled: true })}>
            Limpar filtros
          </button>
        </div>
      </div>
      <p className="col-span-12 md:col-span-6 h-full flex justify-center md:justify-end items-center py-3">
        Ativos {totalActive?.length}/{data?.length}
      </p>
    </div>
  );
};
