"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LinksCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/10 rounded-[14px] relative group">
      <div className="h-full py-5 px-3 2xl:py-7 2xl:px-5 overflow-hidden">
        <div className="w-full h-full">
          <div className="w-full py-3">
            <Image
              height={100}
              width={100}
              src={item.image}
              alt="logo"
              className="h-10 w-10 2xl:h-16 2xl:w-16 bg-[#ffffff20] hover:bg-[#ffffff40] ring-[10px] rounded-[8px] ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center mx-auto  cursor-pointer duration-300"
            />
          </div>
          <div className="w-full mt-4">
            <div className="w-full bg-[#ffffff15] py-1 px-3 2xl:py-2 rounded-[10px] text-center cursor-pointer hover:bg-[#ffffff25] duration-300 item-name overflow-hidden">
              <h3 className="text-lg 2xl:text-xl font-semibold tracking-[0.5px] text-white">
                {item.name}
              </h3>
            </div>
          </div>
          <div className="mt-2 w-full flex justify-between items-center gap-1">
            <div className="w-[85%] 2xl:w-[90%] bg-[#ffffff12] py-[6px] px-2 text-center rounded-[8px] overflow-hidden ">
              <h4 className="text-xs 2xl:text-sm tracking-[0.5px] text-primary overflow-hidden whitespace-nowrap">
                {item.link}
              </h4>
            </div>
            <Link
              href={item.link}
              className="w-[15%] p-[6px] 2xl:p-2 bg-[#ffffff20] text-primary rounded-[8px] text-center flex justify-center items-center hover:bg-[#ffffff30] duration-300 cursor-pointer"
            >
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
          </div>
          <div
            className="text-primary hidden group-hover:block absolute top-2 right-2 p-2 bg-transparent hover:bg-white/10 rounded-[8px] duration-300 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
            </svg>
          </div>
          <div
            className={`absolute top-0 left-0 w-full  ${
              isOpen ? "h-full" : "h-0"
            }  home rounded-[12px] duration-500 overflow-hidden`}
          >
            <div className="h-full flex justify-center items-center text-primary bg-white/10 rounded-[12px]">
              <div className="p-3">
                <div className="flex justify-start items-center gap-3 px-3 py-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-[20px] duration-300 cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                  </svg>
                  Delete
                </div>
              </div>
              <div
                className="flex justify-start items-center cursor-pointer absolute top-2 -right-2 -translate-x-1/2 text-white p-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-full duration-300"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M412.6 227.1L278.6 89c-5.8-6-13.7-9-22.4-9h-.4c-8.7 0-16.6 3-22.4 9l-134 138.1c-12.5 12-12.5 31.3 0 43.2 12.5 11.9 32.7 11.9 45.2 0l79.4-83v214c0 16.9 14.3 30.6 32 30.6 18 0 32-13.7 32-30.6v-214l79.4 83c12.5 11.9 32.7 11.9 45.2 0s12.5-31.2 0-43.2z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksCard;
