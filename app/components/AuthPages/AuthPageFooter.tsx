import { authFooterLinks } from "../../myData/authFooterLinks";

const AuthPageFooter = () => {
  return (
    <footer className=" h-[5%] w-full hidden lg:flex ">
      <div className=" px-1 text-[12px] gap-2 w-[90%] h-full flex items-center justify-between">
        {authFooterLinks.map((item) => (
          <span key={item.link}>
            <a href="#">{item.title}</a>
          </span>
        ))}
      </div>
      <div className=" text-[12px] w-[10%] h-full flex justify-center items-center">
        &copy; 2023 Geek Corp.
      </div>
    </footer>
  );
};

export default AuthPageFooter;
