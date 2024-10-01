"use client";
import { useState } from "react";
import { FaPlusCircle, FaUserAlt } from "react-icons/fa";
import AddWebModal from "./shared/AddWebModal";

const HeadNav = () => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-[10%] w-full bg-[#00000054] rounded-t-[20px] px-5 flex justify-center items-center overflow-hidden">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <h1 className="uppercase text-white font-semibold 2xl:text-lg">
            home
          </h1>
        </div>
        <div className="corner flex gap-5">
          <button
            className="text-primary flex justify-start items-center gap-2 uppercase px-3 py-1 2xl:py-2 2xl:px-5 bg-[#ffffff08] hover:bg-[#ffffff20] rounded-[14px] duration-300"
            onClick={() => setIsOpen(true)}
          >
            <FaPlusCircle />
            <span>Add</span>
          </button>
          <AddWebModal isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="profile text-primary flex justify-start items-center gap-2 uppercase px-3 rounded-full  bg-[#ffffff08] hover:bg-[#ffffff20]  duration-300">
            <FaUserAlt />
            <span>Profile</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadNav;
