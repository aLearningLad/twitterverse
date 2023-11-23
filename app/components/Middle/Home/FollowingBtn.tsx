"use client";

import { useStore } from "@/app/(store)/store";

const FollowingBtn = () => {
  const toggleForYou = useStore((store) => store.toggleForYouOFF);

  return (
    <button
      onClick={toggleForYou}
      className=" w-fit h-full text-[14px] text-neutral-500 focus:text-black font-bold border-transparent border-b-[3px] focus:border-[#1DA1F2]"
    >
      Following
    </button>
  );
};

export default FollowingBtn;
