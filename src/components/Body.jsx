import { links } from "../app/data";
import LinksCard from "./LinksCard";

const Body = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 py-4 px-4">
      {links.map((item) => {
        return <LinksCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default Body;
