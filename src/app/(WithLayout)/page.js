import Body from "@/components/Body";
import axiosInstance from "@/utils/axiosInstance";

const getCategories = async () => {
  const res = await axiosInstance.get(`/categories`);
  return await res.data;
};

const Home = async () => {
  const categories = await getCategories();

  return (
    <section className="hidden lg:block h-full w-full relative">
      <Body categories={categories} />
    </section>
  );
};

export default Home;
