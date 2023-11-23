import { AiOutlineSetting } from "react-icons/ai";
import { useState } from "react";
import { LikedCard, NotifTabs } from ".";

const Notifications = () => {
  return (
    <div className=" w-full h-full px-6 border-x-[1px] flex flex-col border-neutral-200 py-2 items-center">
      <span className=" h-fit w-full flex items-center justify-between">
        <p className=" text-[18px] font-semibold">Notifications</p>
        <AiOutlineSetting size={18} />
      </span>
      <NotifTabs />
      <LikedCard
        img="/assets/kimk.jpg"
        username="Hunda Williams"
        tweetLink="pic.twitter.com/dnWbhQ382RaS"
        targetLike="Drake"
      />
      <LikedCard
        img="/assets/jake.jpg"
        username="kweenie ruff"
        tweetLink="pic.twitter.com/njdBjdeD2KIsFS"
        targetLike="Cardi"
      />
    </div>
  );
};

export default Notifications;
