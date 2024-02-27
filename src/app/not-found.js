import Link from "next/link";

export default function NotFound() {
  const children = (
    <div className=" flex flex-col gap-4 text-center text-white justify-center items-center w-full h-full">
      <h2 className="lg:text-8xl text-3xl font-bold">Not Found</h2>
      <p className="lg:text-5xl text-xl ">Could not find requested resource</p>
      <Link href="/" className="bg-emerald-500 px-4 py-2 rounded-md">
        Return Home
      </Link>
    </div>
  );
  return (
    <div>
      <section className="h-screen bg-[#e9e9e9] text-black p-3 md:p-5 home">
        <section className="hidden lg:block h-full w-full relative">
          <section className="h-full">{children}</section>
        </section>
        <div className="lg:hidden flex flex-col h-full w-full relative overflow-hidden space-y-2">
          {children}
        </div>
      </section>
    </div>
  );
}
