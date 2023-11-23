"use client";

import { useStore } from "@/app/(store)/store";

const SeeMoreModal = () => {
  const seeMoreModal = useStore((store) => store.homeFeedModal);
  const toggleOffModal = useStore((store) => store.setHomeFeedModal);

  const handleCloseIt = () => {
    toggleOffModal();
  };

  return (
    <>
      {seeMoreModal ? (
        <div className=" bg-opacity-80 backdrop-blur-sm absolute top-0 bottom-0 left-0 right-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white text-2xl z-50">
          <p className=" w-6/12 h-fit text-xl font-bold text-center">
            Hey there, beloved user! This was meant to be a not-too-big, fun
            project to test myself. Unfortunately, these are all the demo tweets
            {"I've"} included in the final build. Please feel free to explore
            the rest of the app. There is plenty, plenty more! ;)
          </p>
          <button
            className=" w-fit font-bold h-fit my-5 border-4 border-white rounded-2xl seeMoreAnimated py-2 px-7 hover:bg-white transition duration-300 hover:text-[#1DA1F2] hover:border-transparent"
            onClick={() => handleCloseIt()}
          >
            Close
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SeeMoreModal;
