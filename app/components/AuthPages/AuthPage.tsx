import { Logo } from "@/public/assets";
import { authFooterLinks } from "../../myData/authFooterLinks";
import Image from "next/image";
import { AuthPageFooter, SignIns } from "..";

const AuthPage = () => {
  return (
    <section className=" w-full h-screen flex flex-col">
      <div className=" w-full h-full lg:h-[95%] flex lg:flex-row flex-col p-7 lg:px-24 lg:items-center items-center">
        <div className=" w-4/12 lg:w-1/2 h-[20%] lg:h-full flex justify-center items-center">
          <Image
            src={Logo}
            width={500}
            height={500}
            alt="twitterlogoimg"
            className=""
          />
        </div>
        <div className=" w-full lg:w-1/2 h-full lg:pl-28 py-24">
          <span className="w-full h-fit mb-3 flex flex-col gap-6 justify-between">
            <h1 className=" text-4xl lg:text-6xl font-extrabold text-center lg:text-justify">
              Happening now
            </h1>
            <h4 className=" text-[28px] font-extrabold lg:text-start w-full text-center">
              Join today.
            </h4>
          </span>
          <SignIns />
        </div>
      </div>
      <AuthPageFooter />
    </section>
  );
};

export default AuthPage;
