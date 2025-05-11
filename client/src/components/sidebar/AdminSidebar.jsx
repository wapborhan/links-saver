import Icon from "../shared/Icon";
import { Link } from "react-router-dom";
import SideMenuCard from "./SideMenuCard";
import { sideMenuData } from "./SodebarLink";

const AdminSidebar = () => {
  return (
    <aside className="fixed left-[2%] top-5 bottom-5 w-[20%] 2xl:w-[18%] aside1">
      <div className="h-[10%] px-5 bg-[#ffffff10]  rounded-t-[20px]">
        <div className="h-full flex justify-between items-center text-white">
          <div className="flex justify-start items-center gap-1 md:gap-3">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="35"
              width="35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path>
              <path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path>
            </svg>
            <h1 className="text-xl lg:text-2xl font-bold whitespace-nowrap">
              Site Saver
            </h1>
          </div>
        </div>
      </div>
      <section className="h-full w-full relative">
        <div className="px-5 py-2">
          <Link to="/" className="_menu_1jk02_1 !bg-[#00000040]">
            <Icon iconName="FaHome" size={20} />
            <span>Home</span>
          </Link>
        </div>
        <article id="menuScrollBar" className="h-[70%] overflow-y-scroll">
          <ul className="flex flex-col justify-start items-start gap-3 list-none px-5 pb-4">
            {sideMenuData
              ? sideMenuData?.map((cat, idx) => {
                  return (
                    <li key={idx} className="w-full">
                      <Link
                        to={cat?.link}
                        className="_menu_1jk02_1 bg-[#ffffff30] hover:bg-[#ffffff50]"
                      >
                        <Icon iconName={cat.icon} size={20} />
                        <span className="uppercase">{cat.name}</span>
                      </Link>
                    </li>
                  );
                })
              : ""}
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
    </aside>
  );
};

export default AdminSidebar;
