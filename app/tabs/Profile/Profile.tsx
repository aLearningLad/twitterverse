import {
  ProfileBioSection,
  ProfileHeader,
  ProfileImageSection,
  ProfileTabs,
  ProfileTweetsSection,
} from ".";
import { useStore } from "@/app/(store)/store";

const Profile = () => {
  const profileTab = useStore((store) => store.profileTab);

  return (
    <section className=" h-full w-full flex flex-col border-x-[1px] border-neutral-200 overflow-auto">
      <div>
        <ProfileHeader />
        <ProfileImageSection />
        <ProfileBioSection />
        <ProfileTabs />
      </div>

      <div className=" w-full h-full flex justify-center items-center">
        {profileTab === "Tweets" && <ProfileTweetsSection />}
        {profileTab === "Replies" && <>Tweet Replies go here!</>}
        {profileTab === "Highlights" && <>Highlights go here!</>}
        {profileTab === "Media" && <>Media goes right here!</>}
        {profileTab === "Likes" && <>Likes will appear here!</>}
      </div>
    </section>
  );
};

export default Profile;
