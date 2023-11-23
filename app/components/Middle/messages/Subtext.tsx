"use client";

import { useStore } from "@/app/(store)/store";

const Subtext = () => {
  const subbed = useStore((store) => store.subscribed);

  return (
    <h3 className=" text-center">
      {subbed ? (
        <>
          {"We're"} currently reviewing your premium account request. Once
          approved, you can send messages{" "}
        </>
      ) : (
        <>
          {" "}
          Hi there! Under Consumer Communications Act 32 Ch.12.2, in order to
          send messages, you need to be subscribed to a premium account{" "}
        </>
      )}
    </h3>
  );
};

export default Subtext;
