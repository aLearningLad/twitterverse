import { BsChevronDoubleUp } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";

const RightBarMsg = () => {
  return (
    <button className="absolute msgShadow rounded-tr-2xl rounded-tl-2xl border-b-transparent items-end justify-end left-8 bottom-0 w-10/12 h-[50px] border-[1px] bg-white flex">
      <span className="h-full w-full flex">
        <p className=" pl-3 w-9/12 h-full flex items-center justify-start text-xl font-bold">
          Messages
        </p>
        <div className=" w-3/12 pb-1 flex items-center h-full justify-center gap-2">
          <IoCreateOutline size={22} />
          <BsChevronDoubleUp size={22} />
        </div>
      </span>
    </button>
  );
};

export default RightBarMsg;
