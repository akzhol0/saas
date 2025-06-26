import React from "react";
import { Button } from "@/components/ui/button";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Navbar = () => {
  const navbarItems = ["О нас", "Контакты", "Цены", "Проекты", "Отзывы"];

  return (
    <div className="flex gap-4 items-center text-lg">
      <ul className="flex items-center gap-4">
        {navbarItems.map((item, index) => (
          <li
            className="text-lg cursor-pointer duration-300 whitespace-nowrap hover:border-black border-b border-white"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
      <Button
        variant="default"
        className="text-lg p-6 cursor-pointer rounded-xl"
      >
        Оставить заявку
      </Button>
      <div className="flex flex-col items-start text-[15px]">
        <div className="flex items-center gap-2">
          <IoLogoWhatsapp />
          <p className="whitespace-nowrap">+7 (707) 111 78-04</p>
        </div>
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <p>Astana, Kazakhstan</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
