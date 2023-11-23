import { Explore } from "@/app/tabs/Explore";
import { Home } from "..";
import { useStore } from "@/app/(store)/store";
import { Notifications } from "@/app/tabs/Notifications";
import { Lists } from "@/app/tabs/Lists";
import { Communities } from "@/app/tabs/Communities";
import Profile from "@/app/tabs/Profile/Profile";
import { Messages } from "./messages";

const Container = () => {
  const activeTab = useStore((store) => store.activeTab);

  return (
    <section className=" h-screen w-full">
      {activeTab === "Home" && <Home />}
      {activeTab === "Explore" && <Explore />}
      {activeTab === "Notifications" && <Notifications />}
      {activeTab === "Lists" && <Lists />}
      {activeTab === "Communities" && <Communities />}
      {activeTab === "Profile" && <Profile />}
      {activeTab === "Messages" && <Messages />}
    </section>
  );
};

export default Container;
