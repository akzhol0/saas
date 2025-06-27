import React from "react";
import GreetingPage from "@/components/main-page/GreetingPage";
import ConsultationPage from "@/components/main-page/ConsultationPage";
import TestServer from "@/test/TestServer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <GreetingPage />
      <div className="w-full flex justify-center py-10 md:py-12 bg-[#131313]">
        <ConsultationPage />
      </div>
      <div className="container">
        <TestServer />
      </div>
    </main>
  );
}
