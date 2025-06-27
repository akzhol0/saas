import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты",
};

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="container px-4 h-[1000px]">Contacts</div>
    </div>
  );
};

export default Page;
