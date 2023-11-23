import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";

interface WTFCardProps {
  title: string;
  handle: string;
  img: string;
}

const WTFCard: React.FC<WTFCardProps> = ({ title, handle, img }) => {
  return (
    <section className=" hover:bg-neutral-300 hover:bg-opacity-60 w-full h-full flex items-center">
      <span className=" h-[40px] w-[40px] relative">
        <Image
          src={img}
          fill
          objectFit="cover"
          alt="img"
          className=" absolute rounded-full"
        />
      </span>
      <span className=" h-full w-full flex">
        <span className=" w-8/12 h-full flex justify-center items-start pl-2 flex-col">
          <p className=" w-full flex h-fit justify-start text-start text-[14px] font-bold">
            {title}
          </p>
          <p className="w-full flex h-fit justify-start text-start text-[13px] text-neutral-600 font-medium">
            {handle}
          </p>
        </span>
        <div className=" w-4/12 h-full flex items-center justify-start pr-2">
          <button className=" w-fit h-fit py-1 px-5 font-semibold bg-black text-white rounded-3xl text-[16px]">
            Follow
          </button>
        </div>
      </span>
    </section>
  );
};

export default WTFCard;
