import React from "react";
import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";

const GreetingPage = () => {
  return (
    <div className="container h-[600px]">
      <div className="h-full flex flex-col justify-center">
        <SplitText
          text="Разработка програмного обеспечения для продвижение вашего бизнеса!"
          delay={10}
          className="text-4xl text-start font-bold flex items-start"
        />
        <SplitText
          text="Разрабатываем современное веб-приложение для автоматизации процессов
          и эффективного онлайн-продвижения вашего бизнеса с учетом ваших целей и потребностей."
          delay={10}
          className="text-xl text-start"
        />
      </div>
    </div>
  );
};

export default GreetingPage;
