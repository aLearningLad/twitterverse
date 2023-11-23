import { useStore } from "@/app/(store)/store";
import { TweetCard } from "@/app/components";
import { Ialltweets } from "@/myTypes";

const ProfileTweetsSection = () => {
  const allUserTweets = useStore((store) => store.allTweets);

  return (
    <section className=" w-full h-full flex flex-col ">
      {allUserTweets.length > 0 ? (
        <>
          {allUserTweets.map((item: Ialltweets, index) => (
            <TweetCard
              key={item.tweet?.tweetMessage || index}
              userHandle="@volde_mort"
              userImg="/assets/voldy.jpg"
              username="Tom Riddle"
              timestamp="Just Now"
              commentCount={0}
              retweetCount={0}
              likeCount={0}
              impressionsCount={0}
              verified
              tweetMessage={item.desc}
            />
          ))}
          {/* yOU'VE TWEETED */}
        </>
      ) : (
        <div className=" h-full w-full flex justify-center items-center">
          No tweets yet. Tweet something, anything ;)
        </div>
      )}
    </section>
  );
};

export default ProfileTweetsSection;
