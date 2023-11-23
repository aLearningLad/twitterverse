import { AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { PiBellLight } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { BsPeople } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";

export const leftBarLinks = [
  {
    id: 111,
    title: "Home",
    img: <AiFillHome size={28} />,
    link: "/",
  },
  { id: 222, title: "Explore", img: <BiSearch size={28} />, link: "/" },
  {
    id: 333,
    title: "Notifications",
    img: <PiBellLight size={28} />,
    link: "/",
  },
  { id: 444, title: "Messages", img: <FaRegEnvelope size={28} /> },
  { id: 555, title: "Lists", img: <TiDocumentText size={28} /> },
  { id: 666, title: "Communities", img: <BsPeople size={28} /> },
  { id: 777, title: "Premium", img: <FaTwitter size={28} /> },
  { id: 888, title: "Profile", img: <IoPersonOutline size={28} /> },
  // { id: 999, title: "More", img: <CgMoreO size={28} /> },
];
