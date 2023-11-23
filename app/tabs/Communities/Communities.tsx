import { SlOptions } from "react-icons/sl";
import { CommunitiesHeader, CommunitiesList } from ".";

const Communities = () => {
  return (
    <section className=" w-full h-full flex flex-col px-6 border-x-[1px] border-neutral-200">
      <CommunitiesHeader />

      <CommunitiesList />
    </section>
  );
};

export default Communities;
