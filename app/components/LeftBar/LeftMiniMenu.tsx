import { AiOutlineDown, AiOutlineSetting, AiOutlineUp } from "react-icons/ai";
import {
  BsBookmark,
  BsBoxArrowInDownLeft,
  BsBoxArrowInUpRight,
} from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { MdSwitchAccessShortcutAdd } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";

interface LeftMiniMenuProps {
  handleMenu: () => void;
}

const LeftMiniMenu: React.FC<LeftMiniMenuProps> = ({ handleMenu }) => {
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const [supportList, setSupportList] = useState(false);

  const handleCreatorsStudio = () => {
    setAnalytics((prev) => !prev);
    setAds(false);
    setSupportList(false);
  };

  const handleProTools = () => {
    setAds((prev) => !prev);
    setAnalytics(false);
    setSupportList(false);
  };

  const handleSupport = () => {
    setSupportList((prev) => !prev);
    setAds(false);
    setAnalytics(false);
  };

  return (
    <div className=" w-9/12 z-[50] absolute bg-white flex flex-col bottom-2 h-fit border-[1px] border-neutral-100 menuShadow rounded-xl py-2">
      <span className=" w-full h-fit flex justify-center p-1 mb-3">
        <button onClick={handleMenu}>
          <IoIosCloseCircle size={30} />
        </button>
      </span>
      <section className=" h-3/6 w-full flex flex-col items-start gap-7">
        <button className=" flex w-full h-fit gap-4 items-center">
          <BsBookmark size={28} className=" w-3/12 flex justify-end" />
          <p className=" text-xl font-bold w-10/12 flex justify-start">
            Bookmarks
          </p>
        </button>
        <button className=" flex w-full h-fit gap-4 items-center">
          <FaMoneyBillAlt className=" w-3/12 flex justify-end" size={28} />
          <p className="text-xl font-bold w-10/12 flex justify-start">
            Monetization
          </p>
        </button>
      </section>
      <section className=" h-3/6 w-full flex flex-col mt-2">
        <div className=" w-full h-fit relative bg-white flex flex-col">
          <button
            onClick={handleCreatorsStudio}
            className=" w-full flex justify-between items-center text-start p-3 hover:bg-neutral-100"
          >
            Creator Studio{" "}
            {analytics ? (
              <AiOutlineUp color="#1DA1F2" size={16} />
            ) : (
              <AiOutlineDown size={16} />
            )}
          </button>
          {analytics && (
            <span className=" w-full h-fit flex items-center gap-3 p-3 hover:bg-neutral-100">
              <SiSimpleanalytics size={14} />
              <p className=" text-[15px] font-semibold">Analytics</p>
            </span>
          )}
        </div>
        <div className=" w-full h-fit relative bg-white flex flex-col">
          <button
            onClick={handleProTools}
            className=" w-full flex justify-between items-center text-start p-3 hover:bg-neutral-100"
          >
            Professional Tools{" "}
            {ads ? (
              <AiOutlineUp color="#1DA1F2" size={16} />
            ) : (
              <AiOutlineDown size={16} />
            )}
          </button>
          {ads && (
            <span className=" w-full h-fit flex items-center gap-3 p-3 hover:bg-neutral-100">
              <BsBoxArrowInUpRight size={14} />
              <p className=" text-[15px] font-semibold">Ads</p>
            </span>
          )}
        </div>
        <div className=" w-full h-fit relative bg-white flex flex-col">
          <button
            onClick={handleSupport}
            className=" w-full flex justify-between items-center text-start p-3 hover:bg-neutral-100"
          >
            Settings & Support{" "}
            {supportList ? (
              <AiOutlineUp color="#1DA1F2" size={16} />
            ) : (
              <AiOutlineDown size={16} />
            )}
          </button>
          {supportList && (
            <div className=" w-full h-fit flex flex-col">
              <span className=" w-full h-fit flex items-center gap-3 p-3 hover:bg-neutral-100">
                <AiOutlineSetting size={14} />
                <p className=" text-[15px] font-semibold">Settings & Privacy</p>
              </span>
              <span className=" w-full h-fit flex items-center gap-3 p-3 hover:bg-neutral-100">
                <FiHelpCircle size={14} />
                <p className=" text-[15px] font-semibold">Help Center</p>
              </span>
              <span className=" w-full h-fit flex items-center gap-3 p-3 hover:bg-neutral-100">
                <BsBoxArrowInDownLeft size={14} />
                <p className=" text-[15px] font-semibold">Display</p>
              </span>
              <span className=" w-full h-fit flex items-center gap-3 p-3 hover:bg-neutral-100">
                <MdSwitchAccessShortcutAdd size={14} />
                <p className=" text-[15px] font-semibold">
                  Keyboard & Shortcuts
                </p>
              </span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LeftMiniMenu;
