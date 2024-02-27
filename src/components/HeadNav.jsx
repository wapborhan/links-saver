const HeadNav = () => {
  return (
    <section className="h-[10%] w-full bg-[#00000054] rounded-t-[20px] px-5 flex justify-center items-center overflow-hidden">
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <h1 className="uppercase text-white font-semibold 2xl:text-lg">
            home
          </h1>
        </div>
        <div className="corner flex gap-5">
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
          <div className="profile text-primary flex justify-start items-center gap-2 uppercase px-3 rounded-full  bg-[#ffffff08] hover:bg-[#ffffff20]  duration-300">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            {/* <span>Profile</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadNav;
