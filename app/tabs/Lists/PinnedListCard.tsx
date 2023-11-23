import Image from "next/image";

interface PinnedListCardProps {
  title: string;
  desc: string;
  followerCount: number;
  img: string;
}

const PinnedListCard: React.FC<PinnedListCardProps> = ({
  title,
  desc,
  followerCount,
  img,
}) => {
  return (
    <section className=" w-full h-[140px] flex p-4 hover:bg-neutral-100">
      <div className=" w-6/12 h-full p-3 relative">
        <Image
          alt="listImg"
          src={img}
          fill
          objectFit="cover"
          className=" absolute rounded-xl"
        />
      </div>
      <div className=" w-1/2 h-full flex flex-col items-start justify-start pl-3">
        <p className=" text-lg font-bold">{title}</p>
        <p className=" text-sm text-neutral-600">
          {followerCount} followers including you!
        </p>
      </div>
    </section>
  );
};

export default PinnedListCard;
