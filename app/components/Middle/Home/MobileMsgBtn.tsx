import { FaRegEnvelope } from "react-icons/fa";
import Link from "next/link";

const MobileMsgBtn = () => {
  return (
    <Link
      href="/messages"
      className="w-full h-full flex items-center justify-center"
    >
      <FaRegEnvelope size={26} />
    </Link>
  );
};

export default MobileMsgBtn;
