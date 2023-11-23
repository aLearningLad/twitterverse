"use client";

import { useState } from "react";

const NotifTabs = () => {
  return (
    <span className=" h-fit w-full flex mt-8 mb-5">
      <button className=" w-1/3 h-fit flex justify-center text-[15px] font-semibold">
        All
      </button>
      <button className=" w-1/3 h-fit flex justify-center text-[15px] font-semibold">
        Verified
      </button>
      <button className=" w-1/3 h-fit flex justify-center text-[15px] font-semibold">
        Mentions
      </button>
    </span>
  );
};

export default NotifTabs;
