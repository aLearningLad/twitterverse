"use client";

import { MobileNav } from "../components/Middle/Home";
import { Messages, Subtext } from "../components/Middle/messages";
import { useStore } from "../(store)/store";
import toast from "react-hot-toast";
import Link from "next/link";

const MessagesPage = () => {
  const mobilesubbed = useStore((store) => store.subscribed);
  const subUser = useStore((store) => store.setSubscribed);

  const handleMobileSub = () => {
    subUser();
    toast("Great! Premium account application review underway!");
  };

  return (
    <div className="h-screen w-full">
      {mobilesubbed ? (
        <section className=" w-full h-full flex flex-col relative">
          <div className=" h-full w-full flex justify-center items-center flex-col text-center">
            <p>Awaiting premium account approval</p>
            <p className=" font-semibold text-[12px] mb-4 mt-1">
              Check again in a day or so
            </p>
            <Link
              href="/"
              className=" w-fit h-fit py-2 px-7 rounded-lg text-white font-semibold bg-[#1DA1F2] seeMoreAnimated"
            >
              Home
            </Link>
          </div>

          <div className=" sticky bottom-0 w-full h-[10vh] ">
            <MobileNav />
          </div>
        </section>
      ) : (
        <section className="w-full h-screen flex flex-col">
          <span className=" h-fit w-full flex justify-start pt-5 pb-2 pl-5 pr-2">
            <h4 className="text-[16px] font-semibold text-black">Messages</h4>
          </span>
          <div className=" w-full px-4 gap-3 h-full flex flex-col items-center justify-center text-center">
            <Subtext />
            <button
              className={`subButton w-fit ${
                mobilesubbed ? "hidden" : "flex"
              } hover:bg-[#1DA1F2] hover:scale-90 transition duration-300 h-fit px-5 py-2 bg-black font-semibold text-white rounded-3xl`}
              onClick={handleMobileSub}
            >
              Subscribe Now
            </button>
          </div>
          <div className=" sticky bottom-0 w-full h-[10vh] ">
            <MobileNav />
          </div>
        </section>
      )}
    </div>
  );
};

export default MessagesPage;
