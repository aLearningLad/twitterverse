import Image from "next/image";
import { GoDotFill } from "react-icons/go";

const SportsResults = () => {
  return (
    <section className=" w-full mt-4 h-fit text-2xl px-6">
      <span className="text-[19px] font-extrabold w-full h-fit">
        {"What's"} happening
      </span>
      <div className="h-fit flex flex-col w-full">
        <span className=" w-full h-fit flex">
          <p className=" w-1/2 h-full flex justify-start text-[12px] font-bold items-end text-neutral-500">
            Barclays Premier League
          </p>
          <p className="w-1/2 h-full flex justify-end text-[12px] font-bold items-center">
            <p className=" h-full w-fit p-1 text-neutral-500">Round of 16</p>
            <p className="h-full w-fit flex">
              <GoDotFill size={6} />
            </p>

            <p className=" pl-1 h-full w-fit text-neutral-500">CITY won</p>
          </p>
        </span>
        <span className=" w-full h-1/2 bg-red-500 flex items-center px-2 py-1">
          <div className=" flex w-9/12 h-full justify-start">
            <Image
              src="/assets/ManU.png"
              alt="sportImg"
              width={36}
              height={36}
              className=" rounded-full h-[50px] w-[40px]"
              objectFit="cover"
            />
            <p className=" text-white flex text-[14px] font-bold ml-2">
              Manchester United
            </p>
          </div>
          <div className=" h-full w-3/12 flex justify-end items-center text-white font-bold ">
            1
          </div>
        </span>
        <span className=" w-full h-1/2 bg-cyan-500 flex items-center px-2 py-1">
          <div className=" flex w-9/12 h-full justify-start">
            <Image
              src="/assets/City.png"
              alt="sportImg"
              width={30}
              height={30}
              className=" rounded-full h-fit w-[40px]"
              objectFit="cover"
            />
            <p className=" text-white flex text-[14px] font-bold ml-2">
              Manchester City
            </p>
          </div>
          <div className=" h-full w-3/12 flex justify-end items-center text-white font-bold ">
            5
          </div>
        </span>
      </div>
      <div className=" w-full h-fit flex justify-start py-4 text-[#1D9BF0] text-[15px]">
        Show more
      </div>
    </section>
  );
};

export default SportsResults;
