"use client";
import { useState } from "react";
import { FaPlusCircle, FaUser } from "react-icons/fa";
import AddWebModal from "./shared/AddWebModal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const HeadNav = ({ selectedCategories, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const handleSignOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <section className="h-[10%] w-full bg-[#00000054] rounded-t-[20px] px-5 flex justify-center items-center overflow-hidden relative">
      <div className="w-full flex justify-between items-center ">
        <div className="flex justify-start items-center gap-4">
          <h1 className="uppercase text-white font-semibold 2xl:text-lg">
            {selectedCategories === "all" ? "Home" : selectedCategories}
          </h1>
        </div>
        <div className="corner flex gap-5 ">
          {pathname === "/" ? (
            <>
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
            </>
          ) : (
            ""
          )}

          {user ? (
            <div className="flex gap-4">
              <Link to="/dashboard" title="Dashboard">
                <div className="profile text-primary flex justify-start items-center gap-2 uppercase 2xl:py-2 2xl:px-5 px-3 rounded-xl  bg-[#ffffff08] hover:bg-[#ffffff20]  duration-300">
                  <MdOutlineDashboardCustomize size={24} />
                </div>
              </Link>
              <Link to="/dashboard/profile" title="Profile">
                <div className="profile text-primary flex justify-start items-center gap-2 uppercase 2xl:py-2 2xl:px-5 px-3 rounded-xl  bg-[#ffffff08] hover:bg-[#ffffff20]  duration-300">
                  <FaUser size={24} />
                </div>
              </Link>
              <button onClick={handleSignOut} title="Logout">
                <div className="profile text-primary flex justify-start items-center gap-2 uppercase 2xl:py-2 2xl:px-5 px-3 rounded-xl  bg-[#ffffff08] hover:bg-[#ffffff20]  duration-300">
                  <FaArrowRightFromBracket size={24} />
                </div>
              </button>
            </div>
          ) : (
            <Link to="/signin" title="Sign In">
              <div className="profile text-primary flex justify-start items-center gap-2 uppercase 2xl:py-2 2xl:px-5 px-3 rounded-xl  bg-[#ffffff08] hover:bg-[#ffffff20]  duration-300">
                <FaArrowRightFromBracket /> Sign In
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeadNav;
