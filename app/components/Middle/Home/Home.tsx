import { homeFeed } from "@/app/myData/homeFeed";
import { CreateTweet, TweetCard, WhoToFollow } from "../..";
import HomeHeader from "./HomeHeader";
import { useStore } from "@/app/(store)/store";
import { ShowUserTweets } from "../../UserTweet";
import { BsChevronDoubleDown } from "react-icons/bs";

const Home = () => {
  const forYou = useStore((store) => store.forYou);
  const selectedTrend = useStore((store) => store.selectedTrend);
  const setSeeMoreModal = useStore((store) => store.setHomeFeedModal);

  const toggleSeeMore = () => {
    setSeeMoreModal();
  };

  return (
    <section className=" w-full h-full flex flex-col relative border-l-[1px] border-r-[1px] border-neutral-200">
      <HomeHeader />
      {selectedTrend ? (
        <div className=" w-full h-full flex justify-center items-center flex-col text-center">
          <h2>
            Hey there, we {"haven't"} paid our bills, so our servers are down
            right now
          </h2>
          <p className=" text-2xl ">
            We cannot retrieve tweets about {selectedTrend.title}
          </p>
          <p>Please try again later.</p>
        </div>
      ) : (
        <div className=" w-full h-full overflow-auto z-10 py-8">
          {forYou ? (
            <div className="h-full w-full flex-col ">
              <CreateTweet />
              <ShowUserTweets />
              {homeFeed.map((card) => (
                <TweetCard
                  key={card.tweetMessage}
                  userImg={card.userImg}
                  username={card.username}
                  userHandle={card.userHandle}
                  timestamp={card.timestamp}
                  commentCount={card.commentCount}
                  retweetCount={card.retweetCount}
                  likeCount={card.likeCount}
                  impressionsCount={card.impressionsCount}
                  verified={card.verified}
                  tweetMessage={card.tweetMessage}
                  videoLink={card.videoLink}
                  tweetImg={card.tweetImg}
                />
              ))}
              <span className=" w-full h-fit flex flex-col items-center py-3">
                <button
                  onClick={() => toggleSeeMore()}
                  className=" w-fit h-fit flex flex-col justify-center items-center"
                >
                  <p className=" w-full h-fit flex justify-center text-center text-xl">
                    See more
                  </p>

                  <BsChevronDoubleDown className="seeMoreAnimated" size={20} />
                </button>
              </span>
            </div>
          ) : (
            <div className="h-full w-full flex justify-center items-center text-4xl font-bold px-20 text-center">
              {"You're"} not following anybody. Nothing to see here!
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
