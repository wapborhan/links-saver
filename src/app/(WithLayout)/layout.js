import Header from "@/components/Header";
import MobileBody from "@/components/MobileBody";
import SideBar from "@/components/SideBar";

const layout = ({ children }) => {
  return (
    <section className="h-screen bg-[#e9e9e9] text-black p-3 md:p-5 home">
      <section className="hidden lg:block h-full w-full relative">
        <SideBar />
        {children}
      </section>
      <div className="lg:hidden flex flex-col h-full w-full relative overflow-hidden space-y-2">
        <Header />
        <MobileBody />
      </div>
    </section>
  );
};

export default layout;
