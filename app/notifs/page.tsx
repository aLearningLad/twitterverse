import { MobileNav } from "../components/Middle/Home";
import { Notifications } from "../tabs/Notifications";

const NotifsPage = () => {
  return (
    <section className=" h-screen w-full relative">
      <Notifications />
      <div className="sticky bottom-0 w-full h-fit ">
        <MobileNav />
      </div>
    </section>
  );
};

export default NotifsPage;
