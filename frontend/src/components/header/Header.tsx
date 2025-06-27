import React from "react";
import Brand from "@/components/header/Brand";
import Navbar from "@/components/header/Navbar";

const Header = () => {
  return (
    <div className="flex justify-center">
      <header className="sticky top-0 container flex justify-between gap-2 items-center py-4 px-4">
        <Brand />
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
