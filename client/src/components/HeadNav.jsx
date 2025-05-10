"use client";
import { useState } from "react";
import { FaPlusCircle, FaUserAlt } from "react-icons/fa";
import AddWebModal from "./shared/AddWebModal";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const HeadNav = ({ selectedCategories, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const user = useAuth();

  return (
    <section className="h-[10%] w-full bg-[#00000054] rounded-t-[20px] px-5 flex justify-center items-center overflow-hidden">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <h1 className="uppercase text-white font-semibold 2xl:text-lg">
            {selectedCategories === "all" ? "Home" : selectedCategories}
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
          <AddWebModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            selectedCategories={selectedCategories}
            refetch={refetch}
          />

          <Link
            to={user ? "/profile" : "/signin"}
            className="profile text-primary flex justify-start items-center gap-2 uppercase px-3 rounded-full  bg-[#ffffff08] hover:bg-[#ffffff20]  duration-300"
          >
            {user ? (
              <>
                <MdOutlineDashboardCustomize />
                <span>Dashboard</span>
              </>
            ) : (
              <>
                {" "}
                <FaArrowRightFromBracket /> Sign In
              </>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeadNav;
