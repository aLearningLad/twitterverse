import { AiOutlineArrowLeft } from "react-icons/ai";

const ProfileHeader = () => {
  return (
    <header className=" h-fit px-6 pt-1 flex">
      <span className=" w-1/12 h-full flex items-center">
        <AiOutlineArrowLeft size={20} />
      </span>
      <span className=" w-11/12 h-full flex items-start text-start flex-col justify-start">
        <p className=" font-extrabold text-lg">Tom Riddle</p>
        <p className=" text-[12px] text-neutral-600">
          0 Tweets {/*PUT THIS AS STATE!!*/}
        </p>
      </span>
    </header>
  );
};

export default ProfileHeader;
