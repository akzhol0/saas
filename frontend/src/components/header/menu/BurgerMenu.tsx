import React from "react";

type BurgerMenuProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: (arg0: boolean) => void;
};

const BurgerMenu = ({ isMenuOpen, setIsMenuOpen }: BurgerMenuProps) => {
  return (
    <div
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className={`w-[40px] h-[30px] flex flex-col justify-between cursor-pointer duration-300 sm:hidden`}
    >
      <span
        className={`w-full h-[2px] bg-black origin-center duration-300 ${isMenuOpen && "rotate-45 translate-y-[13px]"}`}
      ></span>
      <span
        className={`w-full h-[2px] bg-black duration-300 ${isMenuOpen && "hidden"}`}
      ></span>
      <span
        className={`w-full h-[2px] bg-black origin-center duration-300 ${isMenuOpen && "-rotate-45 translate-y-[-13px]"}`}
      ></span>
    </div>
  );
};

export default BurgerMenu;
