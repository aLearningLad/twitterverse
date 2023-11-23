import { BsDot } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";

interface TrendingCardProps {
  title: string;
  category: string;
  where: string;
  posts: number;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  title,
  category,
  where,
  posts,
}) => {
  return (
    <button className=" w-full flex items-center justify-start max-h-fit min-h-[90px] p-2 focus:bg-neutral-300 hover:bg-neutral-200 hover:bg-opacity-60">
      <span className=" w-10/12 h-full flex flex-col items-start justify-between">
        <p className=" w-full flex items-center justify-start h-fit text-[12px] font-normal text-neutral-600">
          {category} <BsDot size={16} /> Trending in {where}
        </p>
        <p className=" w-full text-start h-fit font-semibold flex justify-start">
          {title}
        </p>
        <p className=" w-full h-fit flex justify-start text-[12px] text-neutral-600">
          {posts}k posts
        </p>
      </span>
      <span className=" w-2/12 h-full flex justify-center items-start">
        <SlOptions size={14} />
      </span>
    </button>
  );
};

export default TrendingCard;
