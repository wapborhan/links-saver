import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFetchWebsite = (selectedCategories) => {
  const axiosPublic = useAxiosPublic();

  const {
    data: websites = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["websites"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/websites?cat=${selectedCategories}`);
      console.log(res.data?.data);
      return res.data?.data;
    },
  });

  return [websites, isLoading, refetch];
};

export default useFetchWebsite;
