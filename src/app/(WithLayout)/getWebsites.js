import axiosInstance from "@/utils/axiosInstance";
import { queryOptions } from "@tanstack/react-query";

export const getWebsites = (category) =>
  queryOptions({
    queryKey: ["websites", category],
    queryFn: async () => {
      const response = await axiosInstance(`/websites?cat=${category}`);
      return response.data;
    },
  });
