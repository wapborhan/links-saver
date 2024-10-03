"use client";
import { useEffect, useState } from "react";
import HeadNav from "./HeadNav";
import LinksCard from "./LinksCard";
import SideBar from "./sidebar/SideBar";
import axiosInstance from "@/utils/axiosInstance";

const Body = ({ categories }) => {
  const [loader, setLoader] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState("all");
  const [selectedWebsite, setSelectedWebsite] = useState([]);

  // useEffect(() => {
  //   axiosInstance
  //     .get(`/websites?cat=${selectedCategories}`)
  //     .then((res) => {
  //       setSelectedWebsite(res.data);
  //       setLoader(false);
  //     })
  //     .catch((err) => console.error(err));
  // }, [selectedCategories]);

  return (
    <>
      <SideBar
        categories={categories}
        setSelectedCategories={setSelectedCategories}
      />

      <aside className="fixed left-[24%] 2xl:left-[22%] top-5 bottom-5 w-[74%] 2xl:w-[77%]  aside2">
        <section className="h-full w-full rounded-[24px]">
          <HeadNav selectedCategories={selectedCategories} />
          <section
            id="scrollBar"
            className="h-[90%] w-full mb-3 overflow-y-auto rounded-b-[24px] bg-[#bfbfbf1c]"
          >
            <section className="h-full">
              {loader ? (
                <>Loading ...</>
              ) : (
                <>
                  {selectedWebsite.length > 0 ? (
                    <section className="h-full">
                      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 py-4 px-4">
                        {selectedWebsite.map((item) => {
                          return <LinksCard key={item._id} item={item} />;
                        })}
                      </section>
                    </section>
                  ) : (
                    <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl">
                      <h1>No websites found!</h1>
                    </section>
                  )}
                </>
              )}
            </section>
          </section>
        </section>
      </aside>
    </>
  );
};

export default Body;
