"use client";

import Image from "next/image";
import { AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile, BsFillImageFill } from "react-icons/bs";
import { CgOptions } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { ChangeEvent, useState } from "react";
import { tweetType, useStore } from "@/app/(store)/store";
import toast from "react-hot-toast";

const CreateTweet = () => {
  const setLatestTweet = useStore((store) => store.setLatestTweet);
  const addLatestTweettoAllTweets = useStore(
    (store) => store.addLatestTweetToAllTweets
  );

  const [userTweet, setUserTweet] = useState<tweetType>({
    desc: "",
    timeStamp: "Just now",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserTweet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitTweet = (tweet: tweetType) => {
    try {
      if (tweet.desc) {
        setLatestTweet(tweet);

        toast("Tweet sent!");
        setUserTweet((prev) => ({ ...prev, desc: "" }));
      } else {
        toast("You need tweet something before hitting 'Tweet!'");
      }
    } catch (error) {
      console.log(error);
    } finally {
      addLatestTweettoAllTweets();
    }
  };

  return (
    <div className=" w-full h-[15vh] hidden lg:flex flex-col">
      <span className=" h-[45%] pl-4 w-full flex items-center justify-start gap-2">
        <Image
          src="/assets/voldy.jpg"
          width={60}
          height={60}
          alt="profileimg"
          className="rounded-full h-[40px] w-[40px] "
        />
        <input
          className=" text-lg placeholder:text-neutral-800 w-full text-neutral-600 outline-none overflow-auto"
          placeholder="What is happening?"
          name="desc"
          onChange={handleChange}
          value={userTweet.desc as string}
        />
      </span>

      <span className=" w-full h-[55%] flex items-center">
        <span className=" h-full w-10/12 flex pl-14 justify-start gap-3 items-center">
          <BsFillImageFill size={18} color="#1DA1F2" />
          <AiOutlineGif size={18} color="#1DA1F2" />
          <CgOptions size={18} color="#1DA1F2" />
          <BsEmojiSmile size={18} color="#1DA1F2" />
          <SlCalender size={18} color="#1DA1F2" />
          <CiLocationOn size={18} color="#1DA1F2" />
        </span>
        <span className=" w-2/12 h-full flex justify-center items-center">
          <button
            onClick={() => handleSubmitTweet(userTweet)}
            className=" w-fit h-fit px-4 py-2 bg-[#1DA1F2] rounded-3xl text-white font-semibold"
          >
            Tweet
          </button>
        </span>
      </span>
    </div>
  );
};

export default CreateTweet;
