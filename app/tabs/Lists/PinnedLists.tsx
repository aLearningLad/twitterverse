import { PinnedListCardType } from "@/myTypes";
import { PinnedListCard } from ".";
import { useStore } from "@/app/(store)/store";

const PinnedLists = () => {
  const list = useStore((store) => store.list as PinnedListCardType[]);

  return (
    <div className=" w-full min-h-[120px] max-h-[400px] overflow-auto flex justify-center items-start">
      <div className=" w-full min-h-[10vh] max-h-fit">
        <span className=" mt-7 w-full flex justify-center h-full text-neutral-500 font-medium text-[14px]">
          {list.length > 0 ? (
            <section className=" w-full h-fit flex flex-col border-[3px] border-neutral-200  ">
              {list.map((item) => (
                <PinnedListCard
                  key={item.desc}
                  title={item.title}
                  desc={item.desc}
                  followerCount={item.followerCount}
                  img={item.img}
                />
              ))}
            </section>
          ) : (
            <div className=" h-full w-full flex justify-center items-center">
              You {"haven't"} pinned anything to your lists yet. Browse below &
              add what you like.
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default PinnedLists;
