import { profileTabData } from "@/app/myData/profileTabData";
import { useStore } from "@/app/(store)/store";

const ProfileTabs: any = () => {
  const setProfileTab = useStore((store) => store.setProfileTab);
  const profileTab = useStore((store) => store.profileTab);

  const handleActiveTab = (clickedTab: any) => {
    // alert(`You clicked on ${clickedTab}!`);
    setProfileTab(clickedTab);
  };

  return (
    <section className=" w-full h-[40px] flex justify-center">
      {profileTabData.map((item) => (
        <button
          key={item.title}
          onClick={() => handleActiveTab(item.title)}
          className={`${
            profileTab && "border-[#1DA1F2]"
          } hover:bg-neutral-100 w-1/5 h-full border-b-2 border-transparent flex items-center justify-center text-sm font-semibold`}
        >
          {item.title}
        </button>
      ))}
    </section>
  );
};

export default ProfileTabs;
