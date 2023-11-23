"use client";

import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const MobileSearchBtn = () => {
  return (
    <Link
      href="/search"
      className=" w-full h-full flex items-center justify-center"
    >
      <FaSearch size={24} />
    </Link>
  );
};

export default MobileSearchBtn;
