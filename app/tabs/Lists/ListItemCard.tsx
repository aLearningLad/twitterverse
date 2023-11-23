"use client";

import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

interface ListItemCardProps {
  img: string;
  title: string;
  memberCount: number;
  followerCount: number;
  includingWho: string;
  includingWho2?: string;
  addToList: () => void;
}

const ListItemCard: React.FC<ListItemCardProps> = ({
  img,
  title,
  memberCount,
  followerCount,
  includingWho,
  includingWho2,
  addToList,
}) => {
  const [joinList, setJoinList] = useState(false);

  const handleAddToList = () => {
    setJoinList((prev) => !prev);
    addToList();
    toast(`Nice, you've added ${title} to your pinnned list`);
  };

  return (
    <div className=" w-full h-[75px] hover:bg-neutral-100 flex items-center px-3 py-1 justify-center">
      <div className=" w-1/12 h-4/6 relative">
        <Image
          src={img}
          fill
          objectFit="cover"
          alt="listImg"
          className=" absolute rounded-xl"
        />
      </div>
      <div className="w-10/12 pl-3 h-full flex flex-col items-center justify-center">
        <span className=" w-full h-fit flex justify-start pl-1">
          <p className=" text-[14px] font-bold ">{title}</p>
          <div className=" w-fit h-full flex items-center">
            <BsDot size={10} />
          </div>
          <p className=" text-[12px] flex items-center text-neutral-600 font-[500]">
            {memberCount} members
          </p>
        </span>
        <span className=" w-full h-fit flex justify-start pl-1 text-neutral-600 text-[14px]">
          {followerCount} followers including {includingWho} {includingWho2}
        </span>
      </div>
      <div className=" w-1/12 h-full">
        <button
          className="w-full h-full flex justify-center items-center"
          onClick={handleAddToList}
        >
          {joinList ? <TiTick size={30} /> : <BsFillPlusCircleFill size={30} />}
        </button>
      </div>
    </div>
  );
};

export default ListItemCard;
