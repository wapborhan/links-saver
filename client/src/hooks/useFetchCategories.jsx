import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchCategories = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/categories");
      return res.data?.data;
    },
  });

  return [categories, isLoading, refetch];
};

export default useFetchCategories;
