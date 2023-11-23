"use client";

import { trendsData } from "@/app/myData/trendsData";
import { TrendingCard } from "..";
import { useStore } from "@/app/(store)/store";
import { TrendingCardType } from "@/myTypes";

const Trends = () => {
  const setSelectedTrend = useStore((store) => store.setSelectedTrend);

  const handleTrend = (trend: TrendingCardType) => {
    setSelectedTrend(trend);
  };

  return (
    <section className="h-fit bg-neutral-200 bg-opacity-40 w-full rounded-2xl">
      <span className=" h-[5vh] w-full flex justify-start text-xl font-extrabold p-3">
        Trends for you
      </span>
      <div className=" h-fit py-2 w-full flex flex-col items-start">
        {trendsData.map((card) => (
          <button
            key={card.title}
            className=" w-full h-fit"
            onClick={() => handleTrend(card)}
          >
            <TrendingCard
              key={card.title}
              title={card.title}
              category={card.category}
              where={card.where}
              posts={card.posts}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Trends;
