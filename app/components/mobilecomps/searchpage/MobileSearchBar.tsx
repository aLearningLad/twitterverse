"use client";

import Image from "next/image";
import { IoIosSettings } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { useStore } from "zustand";

const MobileSearchBar = () => {
  return (
    <section className=" h-[10vh] w-full bg-neutral-100 bg-opacity-50 backdrop-blur-sm flex items-center">
      <span className=" relative w-[30px] h-[30px] overflow-hidden rounded-full mr-3 ml-2">
        <Image
          src="/assets/voldy.jpg"
          alt="userProfileImg"
          fill
          objectFit="cover"
          className="absolute"
        />
      </span>
      <div className=" w-10/12 h-full flex items-center">
        <span className=" w-full flex">
          <input
            type="text"
            placeholder="Search"
            className=" w-11/12 text-[13px] text-black p-3 bg-neutral-200 rounded-xl bg-opacity-60"
          />
        </span>
      </div>
      <span className=" h-full w-1/12 flex items-center">
        <IoIosSettings size={22} />
      </span>
    </section>
  );
};

export default MobileSearchBar;
