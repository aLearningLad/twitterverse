import { LeftBar, RightBar, Container, SeeMoreModal } from "..";
import { MobileNav } from "../Middle/Home";

const App = () => {
  return (
    <div className=" w-full h-screen flex lg:flex-row flex-col relative">
      <SeeMoreModal />
      <div className=" w-0 h-0 lg:h-full lg:w-[28%]">
        <LeftBar />
      </div>
      <div className=" h-full w-full lg:w-[42%]">
        <Container />
      </div>
      <div className=" w-0 h-0 lg:h-full lg:w-[30%] lg:pl-6">
        <RightBar />
      </div>
      <MobileNav />
    </div>
  );
};

export default App;
