import React from "react";

const LoadingCOmp = () => {
  return (
    <section class="h-full">
      <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
        <div class="bg-white/10 rounded-[14px] relative group">
          <div class="h-full py-5 px-3 2xl:py-7 2xl:px-5 overflow-hidden">
            <div class="w-full h-full">
              <div class="w-full py-3">
                <img
                  src="https://lh3.googleusercontent.com/n3Eac1gPc5OTEh7Go1jemICnooceXtfs4VZW-4CPukCUi_doFsN9Q8njidksZ4KIFyPJVYtR7ZhLL16VoUJSPE1j74iTXT2xwCqq"
                  alt="logo"
                  class="h-10 w-10 2xl:h-16 2xl:w-16 bg-[#ffffff20] hover:bg-[#ffffff40] ring-[10px] rounded-[8px] ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center mx-auto  cursor-pointer duration-300"
                />
              </div>
              <div class="w-full mt-4">
                <div class="w-full bg-[#ffffff15] py-1 px-3 2xl:py-2 rounded-[10px] text-center cursor-pointer hover:bg-[#ffffff25] duration-300 item-name overflow-hidden">
                  <h3 class="text-lg 2xl:text-xl font-semibold tracking-[0.5px] text-white">
                    Meet
                  </h3>
                </div>
              </div>
              <div class="mt-2 w-full flex justify-between items-center gap-1">
                <div class="w-[85%] 2xl:w-[90%] bg-[#ffffff12] py-[6px] px-2 text-center rounded-[8px] overflow-hidden ">
                  <h4 class="text-xs 2xl:text-sm tracking-[0.5px] text-primary overflow-hidden whitespace-nowrap">
                    https://meet.google.com
                  </h4>
                </div>
                <div class="w-[15%] p-[6px] 2xl:p-2 bg-[#ffffff20] text-primary rounded-[8px] text-center flex justify-center items-center hover:bg-[#ffffff30] duration-300 cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </div>
              <div class="text-primary hidden group-hover:block absolute top-2 right-2 p-2 bg-transparent hover:bg-white/10 rounded-[8px] duration-300 cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                </svg>
              </div>
              <div class="absolute top-0 left-0 w-full h-0  home rounded-[12px] duration-500 overflow-hidden">
                <div class="h-full flex justify-center items-center text-primary bg-white/10 rounded-[12px]">
                  <div class="p-3">
                    <div class="flex justify-start items-center gap-3 px-3 py-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-[20px] duration-300 cursor-pointer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>{" "}
                      Delete
                    </div>
                  </div>
                  <div class="flex justify-start items-center cursor-pointer absolute top-2 -right-2 -translate-x-1/2 text-white p-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-full duration-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
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
        <div class="bg-white/10 rounded-[14px] relative group">
          <div class="h-full py-5 px-3 2xl:py-7 2xl:px-5 overflow-hidden">
            <div class="w-full h-full">
              <div class="w-full py-3">
                <img
                  src="https://lh3.googleusercontent.com/rCwHBRBJV4wFiEIN_Mlboj94_TGJxyJtBh-MBFL4y1aZdO4hb7_Uc_PpXRyAoN7O9m_Zc1wSyp3H1vsnb829QE7t9KyGNJY9A1a3QQ"
                  alt="logo"
                  class="h-10 w-10 2xl:h-16 2xl:w-16 bg-[#ffffff20] hover:bg-[#ffffff40] ring-[10px] rounded-[8px] ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center mx-auto  cursor-pointer duration-300"
                />
              </div>
              <div class="w-full mt-4">
                <div class="w-full bg-[#ffffff15] py-1 px-3 2xl:py-2 rounded-[10px] text-center cursor-pointer hover:bg-[#ffffff25] duration-300 item-name overflow-hidden">
                  <h3 class="text-lg 2xl:text-xl font-semibold tracking-[0.5px] text-white">
                    Drive
                  </h3>
                </div>
              </div>
              <div class="mt-2 w-full flex justify-between items-center gap-1">
                <div class="w-[85%] 2xl:w-[90%] bg-[#ffffff12] py-[6px] px-2 text-center rounded-[8px] overflow-hidden ">
                  <h4 class="text-xs 2xl:text-sm tracking-[0.5px] text-primary overflow-hidden whitespace-nowrap">
                    https://drive.google.com
                  </h4>
                </div>
                <div class="w-[15%] p-[6px] 2xl:p-2 bg-[#ffffff20] text-primary rounded-[8px] text-center flex justify-center items-center hover:bg-[#ffffff30] duration-300 cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </div>
              <div class="text-primary hidden group-hover:block absolute top-2 right-2 p-2 bg-transparent hover:bg-white/10 rounded-[8px] duration-300 cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                </svg>
              </div>
              <div class="absolute top-0 left-0 w-full h-0  home rounded-[12px] duration-500 overflow-hidden">
                <div class="h-full flex justify-center items-center text-primary bg-white/10 rounded-[12px]">
                  <div class="p-3">
                    <div class="flex justify-start items-center gap-3 px-3 py-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-[20px] duration-300 cursor-pointer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>{" "}
                      Delete
                    </div>
                  </div>
                  <div class="flex justify-start items-center cursor-pointer absolute top-2 -right-2 -translate-x-1/2 text-white p-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-full duration-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
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

        <div class="bg-white/10 rounded-[14px] relative group">
          <div class="h-full py-5 px-3 2xl:py-7 2xl:px-5 overflow-hidden">
            <div class="w-full h-full">
              <div class="w-full py-3">
                <img
                  src="https://lh3.googleusercontent.com/0rpHlrX8IG77awQMuUZpQ0zGWT7HRYtpncsuRnFo6V3c8Lh2hPjXnEuhDDd-OsLz1vua4ld2rlUYFAaBYk-rZCODmi2eJlwUEVsZgg"
                  alt="logo"
                  class="h-10 w-10 2xl:h-16 2xl:w-16 bg-[#ffffff20] hover:bg-[#ffffff40] ring-[10px] rounded-[8px] ring-[#ffffff20] hover:ring-[#ffffff40] object-cover object-center mx-auto  cursor-pointer duration-300"
                />
              </div>
              <div class="w-full mt-4">
                <div class="w-full bg-[#ffffff15] py-1 px-3 2xl:py-2 rounded-[10px] text-center cursor-pointer hover:bg-[#ffffff25] duration-300 item-name overflow-hidden">
                  <h3 class="text-lg 2xl:text-xl font-semibold tracking-[0.5px] text-white">
                    Gmail
                  </h3>
                </div>
              </div>
              <div class="mt-2 w-full flex justify-between items-center gap-1">
                <div class="w-[85%] 2xl:w-[90%] bg-[#ffffff12] py-[6px] px-2 text-center rounded-[8px] overflow-hidden ">
                  <h4 class="text-xs 2xl:text-sm tracking-[0.5px] text-primary overflow-hidden whitespace-nowrap">
                    https://mail.google.com/
                  </h4>
                </div>
                <div class="w-[15%] p-[6px] 2xl:p-2 bg-[#ffffff20] text-primary rounded-[8px] text-center flex justify-center items-center hover:bg-[#ffffff30] duration-300 cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </div>
              <div class="text-primary hidden group-hover:block absolute top-2 right-2 p-2 bg-transparent hover:bg-white/10 rounded-[8px] duration-300 cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                </svg>
              </div>
              <div class="absolute top-0 left-0 w-full h-0  home rounded-[12px] duration-500 overflow-hidden">
                <div class="h-full flex justify-center items-center text-primary bg-white/10 rounded-[12px]">
                  <div class="p-3">
                    <div class="flex justify-start items-center gap-3 px-3 py-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-[20px] duration-300 cursor-pointer">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>{" "}
                      Delete
                    </div>
                  </div>
                  <div class="flex justify-start items-center cursor-pointer absolute top-2 -right-2 -translate-x-1/2 text-white p-2 bg-[#ffffff08] hover:bg-[#ffffff15] rounded-full duration-300">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
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
      </section>
    </section>
  );
};

export default LoadingCOmp;
