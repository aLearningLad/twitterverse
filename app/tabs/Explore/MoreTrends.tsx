import { TweetCard } from "@/app/components";
import { moreTrendingData } from "@/app/myData/moreTrendingdata";
import {
  TrendingCardType,
  trendingTweetCard,
  trendingTweetCardType,
} from "@/myTypes";
import { BiSolidMessageSquareDots } from "react-icons/bi";

const MoreTrends = () => {
  return (
    <div className=" w-full h-fit">
      <span className=" w-full h-fit flex justify-start text-start text-2xl font-extrabold items-center gap-1">
        <BiSolidMessageSquareDots color="#1D9BF0" />
        Hip hop
      </span>
      <section className=" w-full h-fit flex flex-col">
        {moreTrendingData.map((card) => (
          <TweetCard
            key={card.tweetMessage}
            userHandle={card.userHandle}
            userImg={card.userImg}
            username={card.username}
            timestamp={card.timestamp}
            commentCount={card.commentCount}
            retweetCount={card.retweetCount}
            likeCount={card.likeCount}
            impressionsCount={card.impressionsCount}
            verified={card.verified}
            videoLink={card.videoLink}
            tweetImg={card.tweetImg}
            tweetMessage={card.tweetMessage}
          />
        ))}
      </section>
    </div>
  );
};

export default MoreTrends;
