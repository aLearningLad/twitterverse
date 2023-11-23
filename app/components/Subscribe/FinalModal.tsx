"use client";

import { Dispatch, SetStateAction } from "react";
import { useStore } from "@/app/(store)/store";
import toast from "react-hot-toast";

interface FinalModalProps {
  setNextQ: Dispatch<SetStateAction<boolean>>;
  setMessi: Dispatch<SetStateAction<boolean>>;
}

const FinalModal: React.FC<FinalModalProps> = ({ setNextQ, setMessi }) => {
  const modalClose = useStore((store) => store.toggleSubscribeModal);
  const setSubscribed = useStore((store) => store.setSubscribed);

  const handleFinish = () => {
    setMessi((prev) => !prev);
    setNextQ((prev) => !prev);
    modalClose();
    setSubscribed();
    toast("Bravo! Check back soon on your subscription status");
  };

  return (
    <div className=" w-6/12 h-fit text-center bg-white rounded-2xl flex flex-col px-10 py-14 items-center">
      <h1 className=" text-3xl font-semibold mb-1">Fantastic</h1>
      <p className=" w-9/12 h-fit my-1">
        We will quickly check your profile & details, and if nothing looks dodgy
        {"you'll"} be subscribed!
      </p>
      <span className=" w-full h-fit flex justify-center text-center mt-5">
        <button
          onClick={handleFinish}
          className=" hover:scale-90 transition duration-300 hover:bg-black hover:text-white w-fit h-fit text-xl font-semibold bg-[#1DA1F2] text-white rounded-[32px] px-5 py-2 "
        >
          Finish
        </button>
      </span>
    </div>
  );
};

export default FinalModal;
