"use client";

import { AiOutlineClose } from "react-icons/ai";
import { PremiumTile } from ".";
import { premiumTileInfo } from "@/app/myData/premiumTileInfo";
import { useState } from "react";
import { useStore } from "@/app/(store)/store";
import toast from "react-hot-toast";

const PremiumTabModal = () => {
  const [chosenTile, setChosenTile] = useState<string>("Premium");
  const togglePremiumModal = useStore((store) => store.setPremiumModal);
  const setActiveTab = useStore((store) => store.setActiveTab);
  const setSubscribed = useStore((store) => store.setSubscribed);

  const handleTile = (tile: string) => {
    setChosenTile(tile);
  };

  const togglePremium = () => {
    togglePremiumModal();
    setActiveTab("Lists");
  };

  const handleFinish = () => {
    togglePremiumModal();
    toast("Congrats! Your premium subscription review is underway!");
    setActiveTab("Lists");
    setSubscribed();
  };

  return (
    <div className=" absolute top-0 bottom-0 z-[100] left-0 right-0 bg-black bg-opacity-80 flex justify-center items-center">
      <section className=" w-[38%] h-[70%] bg-white rounded-xl flex flex-col p-4">
        <span className=" w-full h-fit flex justify-start">
          <AiOutlineClose
            className=" cursor-pointer"
            onClick={togglePremium}
            size={24}
          />
        </span>
        <div className=" w-full h-fit flex flex-col items-center text-center mt-14">
          <span className=" text-3xl font-extrabold">Who are you?</span>
          <span className=" text-neutral-600 mt-5">
            Choose the right subscription for you:
          </span>
        </div>
        <section className=" w-full h-[40%] flex gap-4 p-4">
          {premiumTileInfo.map((tile) => (
            <PremiumTile
              key={tile.title}
              onClick={() => handleTile(tile.title)}
              title={tile.title}
              cat={tile.cat}
              desc={tile.desc}
              chosenTile={chosenTile}
            />
          ))}
        </section>
        <span className=" w-full h-fit flex flex-col items-center text-center">
          <button
            onClick={handleFinish}
            className="w-10/12 subButton h-fit py-3 bg-black rounded-[30px] text-white text-[18px] font-bold"
          >
            subscribe
          </button>
          <span className=" w-full flex justify-center text-center gap-1 mt-5 text-sm">
            Learn more about{" "}
            <p className=" text-[15px] text-[#1DA1F2]">Premium</p> and{" "}
            <p>Verified Organizations</p>
          </span>
        </span>
      </section>
    </div>
  );
};

export default PremiumTabModal;
