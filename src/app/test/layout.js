import HeadNav from "@/components/HeadNav";
import Header from "@/components/Header";

const layout = ({ children }) => {
  return (
    <section className="h-screen bg-[#e9e9e9] text-black p-3 md:p-5 home">
      <section className="hidden lg:block h-full w-full relative">
        <aside className="fixed px-5 left-[0%] 2xl:left-[0%] top-5 bottom-5 w-full  aside2">
          <section className="h-full w-full rounded-[24px]">
            <HeadNav />
            <section
              id="scrollBar"
              class="h-[90%] w-full p-5 overflow-y-auto bg-[#bfbfbf1c]"
            >
              <section class="h-full">
                <section class="h-full">{children}</section>
              </section>
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
