import Image from "next/image";

const ProfileImageSection = () => {
  return (
    <div className=" flex relative h-[300px] flex-col w-full">
      <div className=" w-full h-[220px] relative ">
        <Image
          src="/assets/wald.jpg"
          fill
          className=" absolute"
          objectFit="cover"
          alt="waldImg"
        />
      </div>
      <Image
        src="/assets/voldy.jpg"
        alt="profileImg"
        width={100}
        height={100}
        className=" absolute bottom-0 left-7 z-20 rounded-full h-[150px] w-[150px] border-4 border-white  "
      />
      <span className=" w-full h-fit flex justify-end text-end mt-3 pr-3">
        <button className=" w-fit h-fit px-5 border-neutral-300 py-2 border-[1px] rounded-3xl text-[15px] font-semibold">
          Edit Profile
        </button>
      </span>
    </div>
  );
};

export default ProfileImageSection;
