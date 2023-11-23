import { listData } from "@/app/myData/listsData";
import { ListItemCard } from ".";
import { useStore } from "@/app/(store)/store";
import toast from "react-hot-toast";

const ListSection = () => {
  const addToList = useStore((store) => store.addToList);

  const handleAdd = (userChoice: any) => {
    addToList(userChoice);
  };

  const handleShowMore = () => {
    toast("This is all we have right now, please check again later!");
  };

  return (
    <div className=" h-full w-full flex flex-col px-6">
      {listData.map((item) => (
        <ListItemCard
          key={item.title}
          addToList={() => handleAdd(item)}
          img={item.img}
          title={item.title}
          memberCount={item.memberCount}
          followerCount={item.followerCount}
          includingWho={item.includingWho}
          includingWho2={item.includingWho2}
        />
      ))}
      <div className=" w-full h-fit flex justify-start py-4">
        <button
          onClick={handleShowMore}
          className=" w-fit text-[#1DA1F2] h-fit text-[14px]"
        >
          Show more
        </button>
      </div>
    </div>
  );
};

export default ListSection;
