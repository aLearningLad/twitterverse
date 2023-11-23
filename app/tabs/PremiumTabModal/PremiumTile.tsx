import { Dispatch, SetStateAction } from "react";

interface PremiumTileProps {
  title: string;
  cat: string;
  desc: string;
  onClick: () => void;
  //   setChosenTile: Dispatch<SetStateAction<string>>;
  chosenTile: string;
}

const PremiumTile: React.FC<PremiumTileProps> = ({
  title,
  cat,
  desc,
  onClick,
  chosenTile,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-1/2 hover:scale-90 transition duration-300 hover:bg-neutral-50 h-5/6 border-[1px] ${
        chosenTile === title ? "border-[#1DA1F2]" : "border-transparent"
      } premiumShadow justify-center flex flex-col border-[3px]  rounded-xl p-4 text-start`}
    >
      <h4 className=" text-sm text-neutral-500">{title}</h4>
      <p className=" font-bold">{cat}</p>
      <p className="text-[12px] text-neutral-500">{desc}</p>
    </button>
  );
};

export default PremiumTile;
