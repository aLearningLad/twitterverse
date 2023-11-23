import { RightSearch } from "@/app/components";
import { FiArrowLeft } from "react-icons/fi";
import { VscNewFile } from "react-icons/vsc";
import { SlOptions } from "react-icons/sl";
import {
  ListItemCard,
  ListSection,
  ListsHeader,
  PinnedLists,
  YourLists,
} from ".";

const Lists = () => {
  return (
    <section className=" w-full px-6 h-full border-x-[1px] border-neutral-200 flex flex-col pt-2 overflow-auto">
      <ListsHeader />
      <div className=" w-full h-fit">
        <span className=" w-full h-fit text-[19px] mt-3 font-extrabold">
          Pinned Lists
        </span>
        <PinnedLists />
      </div>
      <section className=" w-full h-fit flex flex-col">
        <span className=" w-full h-fit text-[19px] mt-3 font-extrabold mb-4">
          Discover New Lists
        </span>
        <ListSection />
        <YourLists />
      </section>
    </section>
  );
};

export default Lists;
