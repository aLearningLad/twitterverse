import { FaBell } from "react-icons/fa";
import Link from "next/link";

const MobileNotifBtn = () => {
  return (
    <Link
      href="/notifs"
      className="w-full h-full flex items-center justify-center"
    >
      <FaBell size={26} />
    </Link>
  );
};

export default MobileNotifBtn;
