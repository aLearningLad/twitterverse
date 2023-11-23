import Image from "next/image";
import { BsSuitHeartFill } from "react-icons/bs";

interface LikedCardProps {
  img: string;
  username: string;
  tweetLink: string;
  targetLike: string;
}

const LikedCard: React.FC<LikedCardProps> = ({
  img,
  username,
  tweetLink,
  targetLike,
}) => {
  return (
    <section className=" w-full h-[120px] flex hover:bg-neutral-100 py-3 px-2">
      <div className=" w-1/12 h-full">
        <BsSuitHeartFill size={30} color="#ff6347" />
      </div>
      <div className=" flex flex-col items-start pl-2 w-11/12 h-full">
        <div className=" h-[40px] w-[40px] relative border-2 border-black rounded-full">
          <Image
            alt="userImage"
            src={img}
            fill
            className="absolute rounded-full"
            objectFit="cover"
          />
        </div>

        <span className=" h-fit w-full flex justify-start items-stretch">
          <h4 className=" w-fit pr-1 font-semibold">{username}</h4> liked
          <h4 className="w-fit px-1 font-semibold">
            {targetLike}
            {"'s"}
          </h4>{" "}
          tweet
        </span>
        <span className=" w-full h-fit text-neutral-500">{tweetLink}</span>
      </div>
    </section>
  );
};

export default LikedCard;
