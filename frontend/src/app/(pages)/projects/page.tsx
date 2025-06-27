import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Проекты",
};

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="container px-4 h-[1000px]">Projects</div>
    </div>
  );
};

export default Page;
