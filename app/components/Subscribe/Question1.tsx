"use client";

import { SetStateAction } from "react";
import { Dispatch } from "react";

interface Question1Props {
  setMessi: Dispatch<SetStateAction<boolean>>;
  setFirstQ: Dispatch<SetStateAction<boolean>>;
  setYouSure: Dispatch<SetStateAction<boolean>>;
}

const Question1: React.FC<Question1Props> = ({
  setMessi,
  setFirstQ,
  setYouSure,
}) => {
  const handleMessiSelected = () => {
    setMessi((prev) => !prev);
    setFirstQ(false);
    // alert("Messi selected!");
  };

  const handleSnub = () => {
    setFirstQ(false);
    setYouSure((prev) => !prev);
  };

  return (
    <div className=" w-6/12 h-5/6 bg-white rounded-2xl flex flex-col justify-center px-10 py-14 items-center">
      <span className=" flex justify-center text-center w-full h-fit mx-2 text-3xl font-semibold">
        Subscription Terms
      </span>
      <span className=" h-fit mb-7 w-full flex justify-center text-center">
        <h1>We have a few security questions. Please answer honestly</h1>
      </span>
      <span className="h-fit w-full flex flex-col items-center text-center">
        <h2 className=" text-3xl font-semibold">Question 1</h2>
        <p className=" text-xl mt-2">Is Lionel Messi the GOAT?</p>
      </span>
      <span className=" w-full h-fit flex justify-center gap-2 mt-7">
        <button
          onClick={handleMessiSelected}
          className="w-fit h-fit bg-[#1DA1F2] hover:scale-90 transition duration-300 font-semibold px-4 py-2 hover:bg-black text-white rounded-xl"
        >
          Yes, of course!
        </button>
        <button
          onClick={handleSnub}
          className="w-fit hover:bg-[#1DA1F2] hover:scale-90 transition duration-300 font-semibold h-fit px-4 py-2 bg-black text-white rounded-xl"
        >
          Not a chance!
        </button>
      </span>
    </div>
  );
};

export default Question1;
