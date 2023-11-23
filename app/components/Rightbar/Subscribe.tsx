"use client";

import { useStore } from "@/app/(store)/store";
import toast from "react-hot-toast";
const Subscribe = () => {
  const toggleSubscribeModal = useStore((store) => store.toggleSubscribeModal);
  const subscribed = useStore((store) => store.subscribed);

  const handleSubscribe = () => {
    if (!subscribed) {
      toggleSubscribeModal();
    } else {
      toast("Chill, you already have a subscription under review!");
    }
  };

  return (
    <section className=" w-full gap-2 mt-4 p-3 bg-neutral-200 bg-opacity-40 rounded-xl flex flex-col h-[20vh]">
      <span className=" w-full h-fit flex justify-start">
        <h3 className=" text-[18px] font-extrabold">Subscribe to Premium</h3>
      </span>
      <span>
        <p className=" font-bold text-[14px] ">
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
      </span>
      <span>
        <button
          onClick={handleSubscribe}
          className=" subButton w-fit hover:bg-[#1DA1F2] hover:scale-90 transition duration-300 h-fit px-5 py-2 bg-black font-semibold text-white rounded-3xl"
        >
          {subscribed ? <>Pending...</> : <>Subscribe</>}
        </button>
      </span>
    </section>
  );
};

export default Subscribe;
