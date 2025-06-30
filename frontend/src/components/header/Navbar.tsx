"use client";

import React, { useState } from "react";
import BurgerMenu from "@/components/header/menu/BurgerMenu";
import NavLinks from "@/components/header/menu/NavLinks";
import RequestButton from "@/components/header/menu/RequestButton";
import ContactInfo from "@/components/header/menu/ContactInfo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="hidden sm:flex gap-4 items-center text-lg">
        <NavLinks />
        <div className="flex sm:hidden lg:flex">
          <RequestButton />
        </div>
        <div className="hidden lg:flex">
          <ContactInfo />
        </div>
      </div>
      <div
        className={`absolute ${
          isMenuOpen ? "top-24 left-0" : "left-[-1000px] top-24"
        } flex sm:hidden duration-300 w-full h-screen bg-gray-50`}
      >
        <div className="w-full flex flex-col items-center gap-4 pt-2">
          <NavLinks />
          <RequestButton />
          <ContactInfo />
        </div>
      </div>
    </>
  );
};

export default Navbar;
