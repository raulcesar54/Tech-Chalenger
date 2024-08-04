import { useSWRConfig } from "swr";
import { api } from "../../../service/api";
import { ResponseEmployer } from "../../../types/global";
import { API_KEY_SWR } from "../../../types/routes";
import { Badge, Card } from "../../atom";
import { Toolbox } from "../toolbox";

export const EmployeListItem = ({
  CPF,
  position,
  name,
  gender,
  active,
  id,
}: ResponseEmployer) => {
  const { base } = Card({ shadow: "none", bg: "primary", p: "none" });
  const { mutate } = useSWRConfig();

  return (
    <div
      className={base({
        active,
      })}
    >
      <div className="flex flex-col md:flex-row justify-between">
        <div className="p-4 flex flex-col gap-2">
          <h1 className="text-[24px] font-light">{name}</h1>
          <ul className="flex flex-col gap-2 md:flex-row">
            <li className={Badge()}>{CPF}</li>
            <li className={Badge()}>{position}</li>
            <li className={Badge()}>{gender}</li>
          </ul>
        </div>
        <Toolbox
          handleDelete={async () => {
            await api.delete.employer(id);
            mutate(API_KEY_SWR.LIST_EMPLOYER, [], {
              populateCache: true,
              optimisticData: true,
            });
          }}
          handleChange={() => {}}
        />
      </div>
    </div>
  );
};
