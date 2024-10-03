import Body from "@/components/Body";
// import axiosInstance from "@/utils/axiosInstance";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { getCategories } from "./getCategories";
import { getWebsites } from "./getWebsites";

// const getCategories = async () => {
//   const res = await axiosInstance.get(`/categories`);
//   return await res.data;
// };
// const getWebsites = async (cat) => {
//   const res = await axiosInstance.get(`/websites?cat=${cat}`);
//   return await res.data;
// };

const Home = () => {
  // const categories = await getCategories();
  // const websites = await getWebsites("all");
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getCategories);
  void queryClient.prefetchQuery(getWebsites);

  return (
    <section className="hidden lg:block h-full w-full relative">
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* <Body categories={categories} /> */}
        <Body />
      </HydrationBoundary>
    </section>
  );
};

export default Home;
