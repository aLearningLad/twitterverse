"use client";

import { useStore } from "@/app/(store)/store";
import toast from "react-hot-toast";

const DedicatedSubBtn = () => {
  const subscribeModal = useStore((store) => store.setPremiumModal);
  const subbed = useStore((store) => store.subscribed);

  const handleSub = () => {
    subscribeModal();

    toast("Application under review");
  };

  return (
    <button
      className={`subButton w-fit ${
        subbed ? "hidden" : "flex"
      } hover:bg-[#1DA1F2] hover:scale-90 transition duration-300 h-fit px-5 py-2 bg-black font-semibold text-white rounded-3xl`}
      onClick={handleSub}
    >
      Subscribe Now
    </button>
  );
};

export default DedicatedSubBtn;
