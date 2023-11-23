import { RightSearch, TrendingCard } from "@/app/components";
import { exploreTabInfo } from "@/app/myData/exploreCards";
import { AiOutlineSetting } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { ExploreTrending, MoreTrends, SportsResults } from ".";

const Explore = () => {
  return (
    <div className=" w-full h-screen overflow-auto flex flex-col border-x border-[2px] border-neutral-200">
      <span className=" w-full h-[8vh] flex px-6 gap-2 items-center">
        <RightSearch />
        <AiOutlineSetting size={20} />
      </span>
      <ExploreTrending />
      <SportsResults />
      <MoreTrends />
    </div>
  );
};

export default Explore;
