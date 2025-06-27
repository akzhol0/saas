import React from "react";
import FramerFadeIn from "@/components/ui/FramerFadeIn";
import CountUp from "@/blocks/TextAnimations/CountUp/CountUp";
import FancyButton from "@/components/ui/FancyButton";

const GreetingPage = () => {
  return (
    <div className="container h-auto lg:h-[600px] px-4 mb-4">
      <div className="h-full flex flex-col lg:flex-row gap-4 items-start justify-start lg:items-center lg:justify-between">
        <div className="max-w-[900px]">
          <FramerFadeIn>
            <p className="text-[32px] md:text-[45px] lg:text-[55px] text-start font-bold flex items-start">
              Pазработка програмного обеспечения для продвижение вашего бизнеса!
            </p>
          </FramerFadeIn>
          <FramerFadeIn>
            <p className="text-[16px] md:text-[20px] lg:text-[22px] text-start">
              Разрабатываем современное веб-приложение для автоматизации
              процессов и эффективного онлайн-продвижения вашего бизнеса с
              учетом ваших целей и потребностей.
            </p>
          </FramerFadeIn>
        </div>
        <FramerFadeIn>
          <div className="flex flex-col items-start lg:items-end gap-2">
            <p className="text-2xl whitespace-nowrap">Довольных клиентов:</p>
            <CountUp
              from={0}
              to={68}
              direction="up"
              duration={3}
              className="text-4xl font-bold"
            />
            <FancyButton
              className="text-xl p-6 cursor-pointer whitespace-nowrap"
              variant="outline-primary"
            >
              Стать клиентом
            </FancyButton>
          </div>
        </FramerFadeIn>
      </div>
    </div>
  );
};

export default GreetingPage;
