"use client";

import { useStore } from "@/app/(store)/store";
import UserTweetCard from "./UserTweetCard";
import { Ialltweets, Isingletweet } from "@/myTypes";

const ShowUserTweets = () => {
  const latestTweet = useStore((store) => store.latestTweet);
  const allUserTweets = useStore((store) => store.allTweets);

  return (
    <section className=" w-full h-fit">
      {allUserTweets.map((item: Isingletweet) => (
        <UserTweetCard key={item.desc} desc={item.desc} />
      ))}
    </section>
  );
};

export default ShowUserTweets;
