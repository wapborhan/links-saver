import axiosInstance from "@/utils/axiosInstance";
import { queryOptions } from "@tanstack/react-query";

export const getCategories = queryOptions({
  queryKey: ["categories"],
  queryFn: async () => {
    const response = await axiosInstance("/categories");

    return response.data;
  },
});
