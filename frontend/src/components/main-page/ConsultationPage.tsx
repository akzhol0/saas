import React from "react";
import FramerFadeIn from "@/components/ui/FramerFadeIn";
import FancyButton from "@/components/ui/FancyButton";

const ConsultationPage = () => {
  return (
    <div className="container flex flex-col gap-4 md:gap-6 text-white my-2 md:my-8 px-4">
      <FramerFadeIn>
        <p className="text-2xl md:text-4xl lg:text-6xl font-semibold">
          Экспресс-консультация
        </p>
      </FramerFadeIn>
      <FramerFadeIn>
        <div className="text-md md:text-2xl space-y-2">
          <p>Эксперт ответит на ваши IT-вопросы.</p>
          <p>30 минут обсуждения по нужным вам направлениям разработки.</p>
        </div>
      </FramerFadeIn>
      <FramerFadeIn>
        <div className="text-md md:text-2xl">
          <FancyButton>Получить консультацию</FancyButton>
        </div>
      </FramerFadeIn>
    </div>
  );
};

export default ConsultationPage;
