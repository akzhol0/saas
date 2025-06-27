import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Отзывы",
};

const Page = () => {
  return (
    <div className="flex justify-center">
      <div className="container px-4 h-[1000px]">Feedbacks</div>
    </div>
  );
};

export default Page;
