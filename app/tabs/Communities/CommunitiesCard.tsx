import Image from "next/image";

interface CommunitiesCardProps {
  img: string;
  memberCount: number;
  title: string;
}

const CommunitiesCard: React.FC<CommunitiesCardProps> = ({
  img,
  memberCount,
  title,
}) => {
  return (
    <div className=" w-full hover:bg-neutral-100 h-[120px] flex p-4">
      <div className=" w-2/12 h-full flex items-center justify-end">
        <div className=" w-full h-full relative">
          <Image
            alt="comImg"
            src={img}
            fill
            objectFit="cover"
            className=" absolute rounded-xl"
          />
        </div>
      </div>
      <div className=" w-10/12 h-full flex-col pl-3">
        <div className=" w-full h-fit flex flex-col pt-2">
          <span className=" text-[14px] font-bold">{title}</span>
          <span className=" text-sm text-neutral-600 flex gap-1 items-center">
            <p className=" font-bold text-[15px]">{memberCount}</p> Members
          </span>
        </div>
        <span className=" w-full h-fit flex justify-start text-start mt-3">
          <button className="px-5 group py-1 border-2 border-transparent hover:border-[#1DA1F2] hover:bg-transparent hover:scale-90 transition duration-300 hover:text-[#1DA1F2] rounded-xl w-fit h-fit text-[15px] font-bold text-white bg-[#1DA1F2] ">
            Join
          </button>
        </span>
      </div>
    </div>
  );
};

export default CommunitiesCard;
