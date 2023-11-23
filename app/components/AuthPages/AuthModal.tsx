"use client";

import Image from "next/image";
import { useStore } from "../../(store)/store";

const AuthModal = () => {
  const toggleModal = useStore((store) => store.toggleModal);
  const toggleLogin = useStore((store) => store.toggleLogin);
  return (
    <section className=" absolute top-0 bottom-0 left-0 right-0 h-screen w-full backdrop-blur-md bg-neutral-800 bg-opacity-70 flex justify-center items-center text-2xl z-20">
      <div className=" flex flex-col justify-start items-center w-[75%] lg:w-[40%] h-3/6 lg:h-5/6 bg-white rounded-xl">
        <span className=" pl-4 py-2 w-full h-[20%] flex items-start justify-start">
          <button onClick={toggleModal} className=" font-extrabold text-xl">
            X
          </button>
        </span>
        <span className=" flex w-full h-[15%] justify-center">
          <Image
            src="/assets/twitterlogo.svg"
            alt="twitterlogoimg"
            height={40}
            width={40}
            className=""
          />
        </span>
        <span className=" w-full h-[30%] flex justify-center text-center items-center text-[12px] lg:text-lg font-semibold">
          Ugh, {"let's"} simplify this. Just hit {"Next"} below.
        </span>
        <span className=" w-full h-fit flex justify-center">
          <button
            onClick={toggleLogin}
            className="w-8/12 h-fit px-4 rounded-3xl text-lg font-semibold py-2 bg-black text-white"
          >
            Next
          </button>
        </span>
      </div>
    </section>
  );
};

export default AuthModal;
