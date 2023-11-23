import { TrendingCard } from "@/app/components";
import { exploreTabInfo } from "@/app/myData/exploreCards";
import { BiChevronDown } from "react-icons/bi";

const ExploreTrending = () => {
  return (
    <section className=" flex w-full h-fit flex-col px-6 bg-neutral-100 mt-4">
      <span className=" w-full h-fit text-xl font-extrabold mt-4 mb-2">
        Trends for you
      </span>
      <div className="w-full h-[40vh] overflow-auto">
        {exploreTabInfo.map((item) => (
          <TrendingCard
            key={item.title}
            title={item.title}
            category={item.category}
            where={item.where}
            posts={item.posts}
          />
        ))}
      </div>
      <span className=" w-full h-fit flex py-2 flex-col items-center">
        <h3 className=" text-lg font-semibold">Scroll for more</h3>
        <BiChevronDown size={26} />
      </span>
    </section>
  );
};

export default ExploreTrending;
