import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Оставить заявку",
};

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="container px-4 h-[1000px]">Leave request</div>
    </div>
  );
};

export default Page;
