"use client";

import {
  MobileHomeBtn,
  MobileMsgBtn,
  MobileNotifBtn,
  MobileSearchBtn,
} from ".";

const MobileNav = () => {
  return (
    <nav className="flex absolute bottom-0 lg:hidden z-[20] h-[10vh] w-full bg-neutral-100 bg-opacity-40 backdrop-blur-sm justify-evenly items-center">
      <MobileHomeBtn />
      <MobileSearchBtn />
      <MobileNotifBtn />
      <MobileMsgBtn />
    </nav>
  );
};

export default MobileNav;
