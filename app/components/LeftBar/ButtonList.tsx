"use client";

import { leftBarLinks } from "@/moreData/leftBarLinks";
import { MenuButton } from "..";
import { useStore } from "@/app/(store)/store";
import { useState } from "react";
import { LeftMiniMenu } from ".";
import { CgMoreO } from "react-icons/cg";
import toast from "react-hot-toast";

const ButtonList = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const setSelectedTab = useStore((store) => store.setActiveTab);
  const activeTab = useStore((store) => store.activeTab);
  const togglePremiumModal = useStore((store) => store.setPremiumModal);
  const subscribed = useStore((store) => store.subscribed);

  const handleActiveTab = (tab: any) => {
    setSelectedTab(tab.title);
    if (tab.id === 777 && !subscribed) {
      setSelectedTab("Home");
      togglePremiumModal();
    } else if (tab.id === 777 && subscribed) {
      setSelectedTab("Explore");
      toast(
        "You've already applied for premium, remember? Relax, we'll contact you soon."
      );
    }
  };

  const handleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className=" w-full h-[65%] px-20 flex flex-col gap-1 relative">
      {leftBarLinks.map((button) => (
        <button
          onClick={() => handleActiveTab(button)}
          className=" h-full w-full"
          key={button.title}
        >
          {toggleMenu && <LeftMiniMenu handleMenu={handleMenu} />}
          <MenuButton title={button.title} img={button.img} />
        </button>
      ))}
      <button className=" h-full w-full">
        <MenuButton
          openMenu={handleMenu}
          title="More"
          img={<CgMoreO size={28} />}
        />
      </button>
    </div>
  );
};

export default ButtonList;
