import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="h-screen bg-[#e9e9e9] text-black p-3 md:p-5 home">
        <Outlet />
        <div className="lg:hidden flex flex-col h-full w-full relative overflow-hidden space-y-2">
          <Header />
          <aside className="w-full aside2 h-[90%]">
            <Outlet />
          </aside>
        </div>
      </section>
    </>
  );
};

export default Root;
