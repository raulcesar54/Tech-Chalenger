import useSWR from "swr";
import { api } from "../../../service/api";
import { ResponseEmployer } from "../../../types/global";
import { API_KEY_SWR } from "../../../types/routes";
import { EmployeListItem } from "../employeListItem";

export const ListEmployer = () => {
  const { data } = useSWR(
    API_KEY_SWR.LIST_EMPLOYER,
    api.list.employer<ResponseEmployer[]>
  );
  return (
    <ul className="px-6 flex flex-col gap-4">
      {data?.map((item) => (
        <EmployeListItem {...item} key={item.id} />
      ))}
    </ul>
  );
};
