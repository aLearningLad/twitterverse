"use client";

import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { useStore } from "../../(store)/store";

const SignIns = () => {
  const toggleAuthModal = useStore((store) => store.toggleModal);

  return (
    <section className=" h-[70%] w-full flex flex-col">
      <div className=" w-full lg:w-7/12 h-full">
        <span className=" w-full mb-3 h-fit flex justify-start">
          <button
            onClick={toggleAuthModal}
            className=" gap-1 w-full justify-center border-[1px] rounded-3xl border-neutral-400 p-3 font-semibold text-neutral-600 text-sm flex items-center "
          >
            <FcGoogle />
            Sign in with Google
          </button>
        </span>
        <span className=" w-full h-fit flex justify-start">
          <button
            onClick={toggleAuthModal}
            className="gap-1 w-full border-[1px] rounded-3xl border-neutral-400 p-3 font-semibold text-neutral-600 text-sm flex items-center justify-center "
          >
            <AiFillApple />
            Sign in with Apple
          </button>
        </span>
        <span className=" w-full flex justify-center">or</span>
        <span className=" w-full h-fit">
          <button
            onClick={toggleAuthModal}
            className=" w-full h-fit p-3 lg:mb-0 mb-4 rounded-2xl bg-[#1DA1F2] font-semibold text-sm text-white"
          >
            Create Account
          </button>
          <p className=" w-full flex text-center justify-start md:text-start text-[8px] lg:text-[12px]">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </p>
        </span>
      </div>
      <div className=" w-full gap-2 h-fit flex flex-col lg:items-start items-center justify-start">
        <p className=" text-sm md:text-lg font-semibold">
          Already have acccount?
        </p>
        <button
          onClick={toggleAuthModal}
          className=" w-6/12 border-neutral-400 font-semibold h-fit p-2 border-[1px] rounded-2xl text-[#1DA1F2]"
        >
          Sign In
        </button>
      </div>
    </section>
  );
};

export default SignIns;
