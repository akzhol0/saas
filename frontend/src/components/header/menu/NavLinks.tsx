import React from "react";
import Link from "next/link";

type NAVBAR_ITEMS_PROPS = {
  title: string;
  link: string;
};

const NavLinks = () => {
  const NAVBAR_ITEMS = [
    {
      title: "О нас",
      link: "/about-us",
    },
    {
      title: "Контакты",
      link: "/contacts",
    },
    {
      title: "Цены",
      link: "/prices",
    },
    {
      title: "Проекты",
      link: "/projects",
    },
    {
      title: "Отзывы",
      link: "/feedbacks",
    },
  ];

  return (
    <ul className="flex flex-col sm:flex-row items-center gap-4">
      {NAVBAR_ITEMS.map((item: NAVBAR_ITEMS_PROPS, index: number) => (
        <Link key={index} href={item.link}>
          <li className="text-lg cursor-pointer duration-300 whitespace-nowrap hover:border-black border-b border-white">
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
