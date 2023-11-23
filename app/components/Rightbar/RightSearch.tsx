"use client";

import { CiSearch } from "react-icons/ci";

const RightSearch = () => {
  return (
    <section className="h-[6vh] w-full flex">
      <span className=" w-full h-full flex items-center bg-neutral-200 bg-opacity-40 rounded-[30px]">
        <CiSearch size={20} className=" w-2/12 flex" />
        <input
          type="text"
          placeholder="Search"
          className=" w-10/12 h-full bg-transparent placeholder:text-neutral-600 text-sm"
        />
      </span>
    </section>
  );
};

export default RightSearch;
