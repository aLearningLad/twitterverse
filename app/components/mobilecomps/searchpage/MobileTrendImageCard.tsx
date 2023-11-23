"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { mobiletrendimagedata } from "@/app/mobiledata/mobiletrendimagedata";
import { GoDotFill } from "react-icons/go";

const MobileTrendImageCard = () => {
  const [eventshown, seteventshown] = useState(mobiletrendimagedata[0]);
  const indexArray = [0, 1, 2, 3, 4];

  useEffect(() => {
    const generateChoice = () => {
      const randomIndex = Math.floor(Math.random() * 5);
      const chosenIndex = indexArray[randomIndex];
      seteventshown(mobiletrendimagedata[chosenIndex]);
    };

    generateChoice();
  }, [indexArray]);

  return (
    <div className=" w-full h-full relative flex items-end text-white">
      <Image
        src={eventshown.img}
        fill
        objectFit="cover"
        alt="eventImage"
        className=" absolute"
      />
      <div className="h-fit w-full flex flex-col z-10 px-3 py-4">
        <span className="w-full h-fit flex gap-1 items-center text-[14px] font-[400]">
          <p>{eventshown.category}</p> <GoDotFill size={6} />
          <p>{eventshown.eventdate}</p>
        </span>
        <h4 className=" text-3xl font-semibold">{eventshown.eventname}</h4>
      </div>
    </div>
  );
};

export default MobileTrendImageCard;
