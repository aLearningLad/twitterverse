import { RightSearch, Subscribe, TOS, Trends, WhoToFollow } from "..";
import RightBarMsg from "./RightBarMsg";

const RightBar = () => {
  return (
    <section className="h-screen w-full pr-20 py-2 hidden lg:flex flex-col relative">
      <RightSearch />
      <Subscribe />
      <div className=" rounded-2xl mt-4 h-[70vh] w-full overflow-auto">
        <Trends />
        <WhoToFollow />
        <TOS />
      </div>
      <RightBarMsg />
    </section>
  );
};

export default RightBar;
