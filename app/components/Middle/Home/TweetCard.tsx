import Image from "next/image";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { SiSimpleanalytics } from "react-icons/si";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { TweetCardBottom } from "../../miscUi";

interface TweetCardProps {
  userImg: string;
  username: string;
  userHandle: string;
  timestamp: number | string;
  tweetImg?: string;
  commentCount: number;
  retweetCount: number;
  likeCount: number;
  impressionsCount: number;
  verified: boolean;
  tweetMessage?: string;
  videoLink?: string;
}

const TweetCard: React.FC<TweetCardProps> = ({
  userHandle,
  userImg,
  username,
  timestamp,
  tweetImg,
  commentCount,
  retweetCount,
  likeCount,
  impressionsCount,
  verified,
  tweetMessage,
  videoLink,
}) => {
  return (
    <div className=" w-full lg:border-none lg:bg-transparent bg-neutral-100 flex min-h-[10vh] my-5 max-h-fit hover:bg-neutral-100 cursor-pointer">
      <div className="w-[15%] lg:w-[10%] h-full pt-7 px-2">
        <Image
          src={userImg}
          alt="userimg"
          width={40}
          height={80}
          className=" rounded-full h-[50px] w-[50px]"
        />
      </div>
      <div className=" lg:w-10/12 w-[85%] h-full flex flex-col">
        <span className=" items-center py-2 w-full flex justify-start text-start h-fit px-3">
          <span className=" w-11/12 h-full flex">
            <p className=" text-[10px] lg:text-sm font-bold mr-2">{username}</p>
            {verified && <RiVerifiedBadgeFill color="#1DA1F2" size={18} />}
            <p className="text-[10px] lg:text-sm text-neutral-500 font-medium">
              {userHandle}
            </p>
            <BsDot size={16} />
            <p className="text-[10px] lg:text-[14px] text-neutral-500">
              {timestamp}h{" "}
            </p>
          </span>
          <span className=" w-1/12 h-full flex justify-end">
            <SlOptions size={14} />
          </span>
        </span>
        <div className=" h-full w-full flex flex-col px-2">
          <span className=" w-full min-h-fit max-h-[100%] mb-2">
            <p className=" lg:text-[15px] text-[12px]">{tweetMessage}</p>
          </span>
          {videoLink && (
            <div className="w-full h-[60vh] relative py-6">
              <video
                className=" w-full h-full object-cover rounded-2xl"
                controls
                autoPlay
                loop
                muted
              >
                <source src={videoLink} />
              </video>
            </div>
          )}

          {tweetImg && (
            <div className=" w-full h-[60vh] relative py-6">
              <Image
                src={tweetImg}
                fill
                objectFit="cover"
                className=" absolute rounded-2xl"
                alt="tweetImg"
              />
            </div>
          )}
        </div>
        <TweetCardBottom
          commentCount={commentCount}
          retweetCount={retweetCount}
          likeCount={likeCount}
          impressionsCount={impressionsCount}
        />
      </div>
    </div>
  );
};

export default TweetCard;
