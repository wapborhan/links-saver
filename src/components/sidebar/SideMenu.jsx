import { categories } from "@/app/data";
import SideMenuCard from "./SideMenuCard";

const SideMenu = () => {
  return (
    <section className="h-full w-full relative">
      <article id="menuScrollBar" className="h-[80%] overflow-y-scroll">
        <ul className="flex flex-col justify-start items-start gap-3 list-none px-5 py-4">
          {categories.map((cat) => {
            return <SideMenuCard key={cat.id} item={cat} />;
          })}
          <li className="_menu_1jk02_1">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>
            <span>Add New</span>
          </li>
        </ul>
      </article>
      <div className="h-[10%] w-full bg-[#00000010] rounded-b-[20px]">
        <div className="flex justify-center items-center h-full">
          <p className="text-sm 2xl:text-base text-primary">
            Developed By
            <span className="text-white font-semibold cursor-pointer">
              <a href="https://www.srdreamlab.com"> SR Dream Lab</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
