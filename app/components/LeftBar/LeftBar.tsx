import Image from "next/image";
import Link from "next/link";
import { MenuButton } from "..";
import { leftBarLinks } from "@/moreData/leftBarLinks";
import { FiMoreHorizontal } from "react-icons/fi";
import ButtonList from "./ButtonList";
import toast from "react-hot-toast";

const LeftBar = () => {
  const optionOpen = () => {
    toast("Hey there, this feature wasn't coded into the app");
  };

  return (
    <section className=" w-full h-full hidden lg:flex flex-col items-center">
      <div className=" w-full h-[10%] px-20 flex justify-start items-center">
        <Link href="/">
          <Image
            src="/assets/twitterlogo.svg"
            alt="twitterLogoimg"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <ButtonList />
      <div className=" w-full h-[25%] flex flex-col justify-between px-20">
        <button className="bg-[#1DA1F2] h-[50px] text-white text-lg font-semibold w-full rounded-[26px] ">
          Tweet
        </button>
        <div className=" h-fit w-full flex pb-4 gap-2">
          <span className=" w-3/12 h-full relative">
            <Image
              src="/assets/voldy.jpg"
              fill
              objectFit="cover"
              alt="profilepic"
              className=" rounded-full absolute"
            />
          </span>
          <span className=" h-full w-7/12 flex-col">
            <p className="w-full h-fit font-bold flex justify-start">
              Tom Riddle
            </p>
            <p className="w-full h-fit flex justify-start">@volde_mort</p>
          </span>
          <span className=" w-2/12 h-full flex justify-center items-center">
            <FiMoreHorizontal
              className=" cursor-pointer"
              onClick={optionOpen}
              size={28}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default LeftBar;
