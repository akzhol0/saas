import React from "react";

const NavLinks = () => {
  const NAVBAR_ITEMS = ["О нас", "Контакты", "Цены", "Проекты", "Отзывы"];

  return (
    <ul className="flex flex-col sm:flex-row items-center gap-4">
      {NAVBAR_ITEMS.map((item, index) => (
        <li
          key={index}
          className="text-lg cursor-pointer duration-300 whitespace-nowrap hover:border-black border-b border-white"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
