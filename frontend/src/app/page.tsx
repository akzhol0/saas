import React from "react";
import Header from "@/components/header/Header";
import GreetingPage from "@/components/main-page/GreetingPage";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <header className="md:container flex justify-between items-center py-4">
          <Header />
        </header>
        <GreetingPage />
      </div>
    </div>
  );
}
