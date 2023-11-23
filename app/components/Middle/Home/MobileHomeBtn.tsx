import { MdHome } from "react-icons/md";
import Link from "next/link";

const MobileHomeBtn = () => {
  return (
    <Link href="/" className="w-full h-full flex items-center justify-center">
      <MdHome size={34} />
    </Link>
  );
};

export default MobileHomeBtn;
