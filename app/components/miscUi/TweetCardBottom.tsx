"use client";

import toast from "react-hot-toast";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { useStore } from "@/app/(store)/store";

interface TweetCardBottomProps {
  commentCount: number;
  retweetCount: number;
  likeCount: number;
  impressionsCount: number;
}

const TweetCardBottom: React.FC<TweetCardBottomProps> = ({
  commentCount,
  retweetCount,
  likeCount,
  impressionsCount,
}) => {
  const subbedYet = useStore((store) => store.subscribed);

  const handleComment = () => {
    if (subbedYet) {
      toast(
        "You will be able to comment soon. We're quickly validating your premium account subscription request"
      );
    } else {
      toast(
        "To enable viewing and adding comments, subscribe to a premium account"
      );
    }
  };

  const handleLike = () => {
    if (subbedYet) {
      toast(
        "You'll be able to like tweets as soon as your premium account subscription is reviewed. It may take a day or two."
      );
    } else {
      toast("To like a tweet, you need to subscribe to a premium account");
    }
  };

  const handleRetweet = () => {
    if (subbedYet) {
      toast(
        "Don't worry, you can retweet as much as you like after your premium account subscription is approved. Give it a day or so"
      );
    } else {
      toast(
        "Retweets are reserved for premium account subscriptions. Subscribe now"
      );
    }
  };

  return (
    <div className=" w-full h-fit flex py-4 px-2 justify-between">
      <span
        onClick={handleComment}
        className=" h-fit w-fit gap-2 flex justify-center px-2 text-sm items-center"
      >
        <FaRegComment size={18} /> {commentCount}
      </span>
      <span
        onClick={handleRetweet}
        className=" h-fit w-fit gap-2 flex justify-center px-2 text-sm items-center"
      >
        <AiOutlineRetweet size={18} /> {retweetCount}
      </span>
      <span
        onClick={handleLike}
        className=" h-fit w-fit gap-2 flex justify-center px-2 text-sm items-center"
      >
        <AiOutlineHeart size={18} /> {likeCount}
      </span>
      <span className=" h-fit w-fit gap-2 flex justify-center px-2 text-sm items-center">
        <SiSimpleanalytics size={18} /> {impressionsCount}k
      </span>
    </div>
  );
};

export default TweetCardBottom;
