import React from "react";
import GreetingPage from "@/components/main-page/GreetingPage";
import ConsultationPage from "@/components/main-page/ConsultationPage";
import Staff from "@/components/main-page/Staff";
import UsedTech from "@/components/main-page/UsedTech";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <GreetingPage />
      <div className="w-full flex justify-center py-10 md:py-12 bg-[#131313]">
        <ConsultationPage />
      </div>
      <div className="container px-4 text-2xl md:text-4xl py-6 md:py-16 space-y-4 font-semibold">
        <p>Более 20 опытных специалистов с большим опытом</p>
        <p>100% завершение проектов</p>
      </div>
      <Staff />
      <div className="container px-4">
        <p className="text-2xl md:text-4xl font-semibold mb-4">
          Использованные веб-технологий
        </p>
        <UsedTech />
      </div>
    </main>
  );
}
