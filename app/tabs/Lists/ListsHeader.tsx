import { RightSearch } from "@/app/components";
import { FiArrowLeft } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { VscNewFile } from "react-icons/vsc";

const ListsHeader = () => {
  return (
    <div className=" h-[50px] w-full items-center flex">
      <span className=" w-2/12 h-full flex justify-start items-center">
        <FiArrowLeft size={18} color="black" />
      </span>
      <RightSearch />
      <span className=" w-3/12 h-full flex items-center justify-center gap-4 px-2">
        <VscNewFile className=" mr-3" size={20} />
        <SlOptions size={16} />
      </span>
    </div>
  );
};

export default ListsHeader;
