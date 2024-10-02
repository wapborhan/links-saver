import Header from "@/components/Header";

const layout = ({ children }) => {
  return (
    <section className="h-screen bg-[#e9e9e9] text-black p-3 md:p-5 home">
      {children}
      <div className="lg:hidden flex flex-col h-full w-full relative overflow-hidden space-y-2">
        <Header />
        <aside className="w-full aside2 h-[90%]">{children}</aside>
      </div>
    </section>
  );
};

export default layout;
