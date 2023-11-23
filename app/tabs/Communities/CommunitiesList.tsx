import { SlOptions } from "react-icons/sl";
import { CommunitiesCard } from ".";
import { communitiesData } from "@/app/myData/communitiesData";

const CommunitiesList = () => {
  return (
    <section className=" h-full w-full overflow-auto">
      <div className=" w-full h-fit flex flex-col">
        <span className=" w-full h-fit text-[19px] flex justify-between mt-5 font-extrabold items-center">
          Discover new Communities
          <SlOptions size={16} />
        </span>
        {communitiesData.map((card) => (
          <CommunitiesCard
            key={card.title}
            img={card.img}
            memberCount={card.memberCount}
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
};

export default CommunitiesList;
