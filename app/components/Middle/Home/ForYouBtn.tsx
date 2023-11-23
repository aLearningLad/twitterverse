"use client";

import { useStore } from "@/app/(store)/store";

const ForYouBtn = () => {
  const toggleForYou = useStore((store) => store.toggleForYouON);
  const forYou = useStore((store) => store.forYou);

  return (
    <button
      onClick={toggleForYou}
      className={`w-fit h-full text-[14px] text-neutral-500 focus:text-black font-bold border-b-[3px] ${
        forYou && "border-[#1DA1F2]"
      } `}
    >
      For you
    </button>
  );
};

export default ForYouBtn;
