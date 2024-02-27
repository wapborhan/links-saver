import { links } from "../app/data";
import LinksCard from "./LinksCard";

const Body = () => {
  // console.log(categories);
  return (
    <section className="h-full">
      {/* <section className="h-full w-full flex justify-center items-center text-primary tracking-wider text-2xl">
              <h1>No websites found!</h1>
            </section> */}
      <section className="h-full">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
          {links.map((item) => {
            return <LinksCard key={item.id} item={item} />;
          })}
        </section>
      </section>
    </section>
  );
};

export default Body;
