import { MobileNav } from "../components/Middle/Home";
import {
  MobileMoreTrendsContainer,
  MobileSearchBar,
  MobileTrendImage,
  MobileTrendsContainer,
} from "../components/mobilecomps/searchpage";

const MobileSearchPage = () => {
  return (
    <div className="w-full h-full flex flex-col relative">
      <MobileSearchBar />
      <MobileTrendImage />
      <MobileTrendsContainer />
      <MobileMoreTrendsContainer />
      <div className=" sticky bottom-0 w-full h-[10vh] ">
        <MobileNav />
      </div>
    </div>
  );
};

export default MobileSearchPage;
