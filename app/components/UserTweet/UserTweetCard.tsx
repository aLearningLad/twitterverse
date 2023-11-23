import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

interface UserTweetCardProps {
  desc: string;
}

const UserTweetCard: React.FC<UserTweetCardProps> = ({ desc }) => {
  return (
    <div className=" w-full flex min-h-[10vh] my-5 max-h-fit hover:bg-neutral-100 cursor-pointer">
      <div className=" w-[10%] h-full pt-7 px-2">
        <Image
          src="/assets/voldy.jpg"
          alt="userimg"
          width={40}
          height={80}
          className=" rounded-full h-[50px] w-[50px]"
        />
      </div>
      <div className=" w-10/12 h-full flex flex-col">
        <span className=" items-center py-2 w-full flex justify-start text-start h-fit px-3">
          <span className=" w-11/12 h-full flex">
            <p className=" text-sm font-bold mr-2">Tom Riddle</p>
            <p className=" text-sm text-neutral-500 font-medium">@volde_mort</p>
            <BsDot size={16} />
            <p className=" text-[14px] text-neutral-500">Just now</p>
          </span>
          <span className=" w-1/12 h-full flex justify-end">
            <SlOptions size={14} />
          </span>
        </span>
        <div className=" h-full w-full flex flex-col px-2">
          <span className=" w-full min-h-fit max-h-[100%] mb-2">
            <p>{desc}</p>
          </span>
          {/* {tweetImg && (
            <div className=" w-full h-[60vh] relative py-6">
              <Image
                src='/'
                fill
                objectFit="cover"
                className=" absolute rounded-2xl"
                alt="tweetImg"
              />
            </div>
          )} */}
        </div>
        <div className=" w-full h-fit flex py-4 px-2 justify-between">
          <span className=" h-fit w-fit gap-2 flex justify-center px-2 text-sm items-center">
            <FaRegComment size={18} /> 0
          </span>
          <span className=" h-fit w-fit gap-2 flex justify-center px-2 text-sm items-center">
            <AiOutlineRetweet size={18} /> 0
          </span>
          <span className=" h-fit w-fit gap-2 flex justify-center px-2 text-sm items-center">
            <AiOutlineHeart size={18} /> 0
          </span>
          <span className=" h-fit w-fit gap-2 flex justify-center px-2 text-sm items-center">
            <SiSimpleanalytics size={18} /> 0
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserTweetCard;
