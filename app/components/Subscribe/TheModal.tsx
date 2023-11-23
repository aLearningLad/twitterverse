"use client";

import { useState } from "react";
import { AreYouSure, FinalModal, Question1, Question2 } from ".";

const TheModal = () => {
  const [firstQ, setFirstQ] = useState(true);
  const [messi, setMessi] = useState(false);
  const [youSure, setYouSure] = useState(false);
  const [nextQ, setNextQ] = useState(false);

  return (
    <div className="z-50 absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 flex justify-center items-center">
      {firstQ && (
        <Question1
          setMessi={setMessi}
          setFirstQ={setFirstQ}
          setYouSure={setYouSure}
        />
      )}
      {messi && !nextQ && <Question2 setNextQ={setNextQ} setMessi={setMessi} />}
      {youSure && (
        <AreYouSure
          setMessi={setMessi}
          setFirstQ={setFirstQ}
          setYouSure={setYouSure}
        />
      )}
      {nextQ && <FinalModal setNextQ={setNextQ} setMessi={setMessi} />}
    </div>
  );
};

export default TheModal;
