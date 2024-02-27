import HeadNav from "@/components/HeadNav";
import Header from "@/components/Header";
import SideBar from "@/components/sidebar/SideBar";

const layout = ({ children }) => {
  return (
    <section className="h-screen bg-[#e9e9e9] text-black p-3 md:p-5 home">
      <section className="hidden lg:block h-full w-full relative">
        <SideBar />

        <aside className="fixed left-[24%] 2xl:left-[22%] top-5 bottom-5 w-[74%] 2xl:w-[77%]  aside2">
          <section className="h-full w-full rounded-[24px]">
            <HeadNav />
            <section
              id="scrollBar"
              className="h-[90%] w-full p-5 overflow-y-auto rounded-b-[24px] bg-[#bfbfbf1c]"
            >
              {children}
            </section>
          </section>
        </aside>
      </section>
      <div className="lg:hidden flex flex-col h-full w-full relative overflow-hidden space-y-2">
        <Header />
        <aside className="w-full aside2 h-[90%]">{children}</aside>
      </div>
    </section>
  );
};

export default layout;
