import SideMenuCard from "./SideMenuCard";
import { useState } from "react";
import Icon from "../shared/Icon";
import AddCatModal from "../shared/AddCatModal";
import { Link } from "react-router-dom";

const SideMenu = ({ categories, setSelectedCategories, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <section className="h-full w-full relative">
      <div className="px-5 py-2">
        <div
          className="_menu_1jk02_1 !bg-[#00000054]"
          onClick={() => setIsOpen(true)}
        >
          <Icon iconName="FaPlus" size={20} />
          <span>Add New</span>
        </div>
      </div>
      <AddCatModal isOpen={isOpen} setIsOpen={setIsOpen} refetch={refetch} />
      <article id="menuScrollBar" className="h-[70%] overflow-y-scroll">
        <ul className="flex flex-col justify-start items-start gap-3 list-none px-5 pb-4">
          <li
            className="_menu_1jk02_1 bg-[#ffffff30] hover:bg-[#ffffff50]"
            onClick={() => setSelectedCategories("all")}
          >
            <Icon iconName="FaHome" size={20} />
            <span>Home</span>
          </li>
          {categories
            ? categories?.map((cat) => {
                return (
                  <SideMenuCard
                    key={cat._id}
                    item={cat}
                    setSelectedCategories={setSelectedCategories}
                    refetch={refetch}
                  />
                );
              })
            : "No Categories Found"}
        </ul>
      </article>
      <div className="h-[10%] w-full bg-[#00000010] rounded-b-[20px]">
        <div className="flex justify-center items-center h-full">
          <p className="text-sm 2xl:text-base text-primary flex gap-4 justify-between">
            Developed By
            <span className="text-white font-semibold cursor-pointer">
              <Link to="https://www.srdreamlab.com" target="__BLANK">
                SR Dream Lab
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
