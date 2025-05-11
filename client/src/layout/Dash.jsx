import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { Toaster } from "react-hot-toast";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import HeadNav from "../components/HeadNav";

const Dash = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="h-screen bg-[#e9e9e9] text-black p-3 md:p-5 home">
        <section className="hidden lg:block h-full w-full relative">
          <AdminSidebar />
          <aside className="fixed left-[24%] 2xl:left-[22%] top-5 bottom-5 w-[74%] 2xl:w-[77%]  aside2 bg-[#bfbfbf1c]">
            <section className="h-full w-full rounded-[24px]">
              <HeadNav />
              <section
                id="scrollBar"
                className="h-[90%] w-full p-5 overflow-y-auto rounded-b-[24px] bg-[#bfbfbf1c]"
              >
                <Outlet />
              </section>
            </section>
          </aside>
        </section>
        <div className="lg:hidden flex flex-col h-full w-full relative overflow-hidden space-y-2">
          <Header />
          <aside className="w-full aside2 h-[90%]">
            <Outlet />
            {/* <MobileBody /> */}
          </aside>
        </div>
      </section>
    </>
  );
};

export default Dash;
