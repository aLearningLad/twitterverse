"use client";

import { Dispatch, SetStateAction } from "react";

interface Question2Props {
  setNextQ: Dispatch<SetStateAction<boolean>>;
  setMessi: Dispatch<SetStateAction<boolean>>;
}

const Question2: React.FC<Question2Props> = ({ setNextQ, setMessi }) => {
  const handleFinish = () => {
    setMessi((prev) => !prev);
    setNextQ((prev) => !prev);
  };

  return (
    <div className=" w-6/12 h-fit bg-white rounded-2xl flex flex-col px-10 py-14 items-center">
      <span>
        <h1 className=" text-3xl font-semibold">
          {"We're"} on the right track. Next question
        </h1>
      </span>
      <span>
        <h3>
          Do you promise to not spread hate & only tweet for good vibes & spread
          positive energy?
        </h3>
      </span>

      <div className=" w-full mt-9 h-fit flex justify-center items-center gap-6">
        <button
          onClick={() => setNextQ((prev) => !prev)}
          className=" w-fit h-fit hover:scale-90 transition hover:bg-black duration-300 text-xl font-semibold bg-[#1DA1F2] text-white rounded-[32px] px-5 py-2 "
        >
          I promise!
        </button>
      </div>
    </div>
  );
};

export default Question2;
