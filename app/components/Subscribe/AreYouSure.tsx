"use client";

import { Dispatch } from "react";
import { SetStateAction } from "react";

interface AreYouSureProps {
  setMessi: Dispatch<SetStateAction<boolean>>;
  setFirstQ: Dispatch<SetStateAction<boolean>>;
  setYouSure: Dispatch<SetStateAction<boolean>>;
}

const AreYouSure: React.FC<AreYouSureProps> = ({
  setMessi,
  setFirstQ,
  setYouSure,
}) => {
  const handleCorrection = () => {
    setYouSure((prev) => !prev);
    setMessi(true);
  };

  return (
    <div className=" w-6/12 h-fit bg-white rounded-2xl flex flex-col px-10 py-14 items-center">
      <span className=" w-full flex h-fit text-4xl justify-center">
        <h1>Are you sure, buddy?</h1>
      </span>

      <span className=" w-full h-fit mt-3 flex justify-center text-center">
        <h3>We will forgive any mistaken answers, so think very carefully.</h3>
      </span>

      <span>
        <h1 className=" font-bold">Is Messi the Greatest Of All Time?</h1>
      </span>

      <div className=" w-full h-fit mt-8 flex gap-4">
        <span className=" w-1/2 h-fit flex gap-2 justify-end pr-5 items-center">
          <button
            onClick={handleCorrection}
            className=" w-fit h-fit hover:scale-90 transition duration-300 text-4xl font-semibold bg-[#1DA1F2] text-white rounded-[32px] px-5 py-2 "
          >
            Yes
          </button>
        </span>
        <span>OR</span>
        <span className="w-1/2 h-fit flex gap-2 justify-start pl-5 items-center">
          <button
            onClick={handleCorrection}
            className="w-fit hover:scale-90 transition duration-300 h-fit text-4xl font-semibold bg-[#1DA1F2] text-white rounded-[32px] px-5 py-2 "
          >
            Duh
          </button>
        </span>
      </div>
    </div>
  );
};

export default AreYouSure;
