interface MenuButtonProps {
  title: string;
  img: React.ReactElement;
  openMenu?: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ title, img, openMenu }) => {
  return (
    <button onClick={openMenu} className="flex h-[10%] w-full group">
      <span className="h-full w-4/12 flex justify-center items-center">
        {img}
      </span>
      <span className=" group-focus:font-extrabold w-8/12 flex justify-start items-center h-full text-xl">
        {title}
      </span>
    </button>
  );
};

export default MenuButton;
