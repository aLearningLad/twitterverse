import { whotofollowData } from "@/app/myData/whotofollowData";
import { WTFCard } from "..";

const WhoToFollow = () => {
  return (
    <section className=" w-full h-[35vh] flex flex-col mt-5">
      <span className=" h-fit w-full flex justify-start text-start text-[22px] mb-3 font-extrabold">
        Who to follow
      </span>
      {whotofollowData.map((item) => (
        <WTFCard
          key={item.handle}
          title={item.title}
          handle={item.handle}
          img={item.img}
        />
      ))}
    </section>
  );
};

export default WhoToFollow;
