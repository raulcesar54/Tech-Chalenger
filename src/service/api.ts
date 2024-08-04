import { API } from ".";
export const api = {
  insert: {
    employer: <T>(data: T) => API.post("employers", data),
  },
  list: {
    employer: async <T>() => {
      const { data } = await API.get<T>("employers");
      return data;
    },
  },
  delete: {
    employer: async (id: string) => API.delete(`employers/${id}`),
  },
};
