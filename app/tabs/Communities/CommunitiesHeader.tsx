import { AiOutlineArrowLeft, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const CommunitiesHeader = () => {
  return (
    <div className=" w-full h-fit flex items-center pt-5">
      <div className="w-1/12">
        <AiOutlineArrowLeft size={20} />
      </div>
      <span className=" w-9/12 h-fit text-[20px] font-semibold flex justify-start text-start">
        Communities
      </span>
      <span className=" w-2/12 h-full flex justify-end items-center gap-3">
        <FiSearch size={20} />
        <AiOutlineUsergroupAdd size={20} />
      </span>
    </div>
  );
};

export default CommunitiesHeader;
