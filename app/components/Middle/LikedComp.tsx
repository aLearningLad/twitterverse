"use client";

import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const LikedComp = () => {
  const [liked, setliked] = useState<boolean>(false);

  const handleLike = () => {
    setliked((prev) => !prev);
  };

  return (
    <button>
      {liked ? (
        <>
          <AiOutlineHeart size={18} />
        </>
      ) : (
        <>
          <AiOutlineHeart size={18} color="red" />
        </>
      )}
    </button>
  );
};

export default LikedComp;
