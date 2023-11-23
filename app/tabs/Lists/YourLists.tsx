import { useStore } from "@/app/(store)/store";
import toast from "react-hot-toast";
import { useState } from "react";

const YourLists = () => {
  const togglePremiumModal = useStore((store) => store.setPremiumModal);
  const subscribed = useStore((store) => store.subscribed);
  const [lure, setLure] = useState(true);

  const handleCreate = () => {
    if (!subscribed) {
      togglePremiumModal();
    } else if (subscribed) {
      toast(
        "You already have a pending premium subscription application. We are still reviewing it!"
      );
    }
  };

  return (
    <section className=" px-6 w-full flex-col min-h-[30vh] max-h-fit">
      <span className=" mt-4 w-full h-fit flex justify-start text-start font-extrabold text-[17px]">
        Your Lists
      </span>
      <div className=" w-full h-fit">
        <span className=" w-full flex mt-7 justify-center h-fit text-neutral-500 font-medium text-[14px]">
          You {"haven't"} created or followed any Lists. When you do,{" "}
          {"they'll"}
          show up here.
        </span>
      </div>
      <div className="w-full h-fit py-2">
        {subscribed ? (
          <div className="w-full h-full flex justify-center items-center text-xl text-center">
            {lure ? (
              <button
                onClick={(e: React.MouseEvent) => setLure((prev) => !prev)}
                className=" w-fit h-fit hover:scale-90 transition duration-300 text-lg border-2 hover:bg-transparent hover:text-[#1DA1F2] border-transparent hover:border-[#1DA1F2] bg-[#1DA1F2] text-white font-semibold px-4 py-1 rounded-2xl mt-2 "
              >
                Create
              </button>
            ) : (
              <>
                You have a pending Premium subscription application. Check back
                again soon!
              </>
            )}
          </div>
        ) : (
          <span className=" w-full h-full flex justify-center items-center flex-col">
            <p>To create a list, you must be subscribed</p>
            <button
              className=" w-fit h-fit hover:scale-90 transition duration-300 text-lg border-2 hover:bg-transparent hover:text-[#1DA1F2] border-transparent hover:border-[#1DA1F2] bg-[#1DA1F2] text-white font-semibold px-4 py-1 rounded-2xl mt-2 "
              onClick={handleCreate}
            >
              Create a list
            </button>
          </span>
        )}
      </div>
    </section>
  );
};

export default YourLists;
