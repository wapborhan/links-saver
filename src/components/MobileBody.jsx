import React from "react";
import LoadingCOmp from "./LoadingCOmp";

const MobileBody = () => {
  return (
    <aside className="w-full aside2 h-[90%]">
      <section className="h-full w-full rounded-[24px]">
        <section id="scrollBar" className="h-[90%] w-full p-5 overflow-y-auto">
          <section className="h-full">
            {/* <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl">
              <h1>No websites found!</h1>
            </section> */}
            <LoadingCOmp />
          </section>
        </section>
        <section className="h-[10%] w-full bg-[#00000035] rounded-b-[20px] px-5 flex justify-center items-center overflow-hidden">
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-start items-center gap-4">
              <h1 className="uppercase text-white font-semibold 2xl:text-lg">
                home
              </h1>
            </div>
            <button className="text-primary flex justify-start items-center gap-2 uppercase px-3 py-1 2xl:py-2 2xl:px-5 bg-[#ffffff08] hover:bg-[#ffffff20] rounded-[14px] duration-300">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"></path>
              </svg>
              <span>Add</span>
            </button>
          </div>
        </section>
      </section>
    </aside>
  );
};

export default MobileBody;
