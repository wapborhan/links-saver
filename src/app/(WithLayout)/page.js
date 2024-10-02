import Body from "@/components/Body";
import HeadNav from "@/components/HeadNav";
import SideBar from "@/components/sidebar/SideBar";
import axiosInstance from "@/utils/axiosInstance";

const getCategories = async () => {
  const res = await axiosInstance.get(`/categories`);
  return await res.data;
};
const getWebsites = async (cat) => {
  const res = await axiosInstance.get(`/websites?cat=${cat}`);
  return await res.data;
};

const Home = async () => {
  const categories = await getCategories();
  const websites = await getWebsites("all");

  return (
    <section className="hidden lg:block h-full w-full relative">
      <SideBar categories={categories} />

      <aside className="fixed left-[24%] 2xl:left-[22%] top-5 bottom-5 w-[74%] 2xl:w-[77%]  aside2">
        <section className="h-full w-full rounded-[24px]">
          <HeadNav />
          <section
            id="scrollBar"
            className="h-[90%] w-full mb-3 overflow-y-auto rounded-b-[24px] bg-[#bfbfbf1c]"
          >
            <section className="h-full">
              {/* <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl">
          <h1>No websites found!</h1>
        </section> */}
              <section className="h-full">
                <Body categories={categories} websites={websites} />
              </section>
            </section>
          </section>
        </section>
      </aside>
    </section>
  );
};

export default Home;
