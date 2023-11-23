import Image from "next/image";
import FollowingBtn from "./FollowingBtn";
import ForYouBtn from "./ForYouBtn";

const HomeHeader = () => {
  return (
    <header className=" w-full py-3 h-[15vh] lg:z-0 z-10 sticky top-0 flex flex-col px-2 lg:py-1 backdrop-blur-md">
      <span className=" h-4/6 w-full flex justify-start text-[20px] font-bold">
        <div className=" flex lg:hidden w-[30px] h-[30px] rounded-full mr-3 ml-2 overflow-hidden relative">
          <Image
            src="/assets/voldy.jpg"
            fill
            objectFit="cover"
            className=" absolute"
            alt="userProfileImg"
          />
        </div>
        Home {/*REPLACE THIS WITH STATE*/}
      </span>
      <span className=" flex w-full h-2/6">
        <div className=" w-1/2 h-full flex justify-center items-center">
          <ForYouBtn />
        </div>
        <div className=" w-1/2 h-full flex justify-center items-center">
          <FollowingBtn />
        </div>
      </span>
    </header>
  );
};

export default HomeHeader;
