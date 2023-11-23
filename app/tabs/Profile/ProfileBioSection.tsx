import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const ProfileBioSection = () => {
  return (
    <div className=" w-full px-4 h-[180px] flex-col flex">
      <span className=" w-full h-fit flex justify-start text-start text-[18px] font-extrabold">
        Tom Riddle
      </span>
      <span className=" w-full h-fit flex justify-start text-start text-sm text-neutral-500">
        @volde_mort
      </span>
      <span className=" mt-3 mb-1 w-full h-fit flex justify-start text-start text-sm text-black">
        The Dark Lord. Former Hogwarts prefect. Severus, Nagini & Albus were all
        my friends at some point
      </span>
      <span className=" w-full h-fit flex justify-start text-start gap-5">
        <p className="w-fit text-sm flex gap-1 items-center h-fit">
          <CiLocationOn size={18} />
          Albanian Forests
        </p>
        <p className="w-fit text-sm flex gap-1 items-center h-fit">
          <SlCalender size={16} />
          Joined April 1944
        </p>
      </span>
      <span className=" w-full h-fit flex justify-start text-start mt-2 items-center gap-1">
        <span className=" text-sm flex items-center text-neutral-600 gap-1">
          <p className=" font-extrabold text-[16px]">0</p> Following
        </span>
        <span className="text-sm flex items-center text-neutral-600 gap-1">
          <p className=" font-extrabold text-[16px]">0</p> Followers
        </span>
      </span>
    </div>
  );
};

export default ProfileBioSection;
