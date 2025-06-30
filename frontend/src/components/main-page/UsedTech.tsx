"use client";

import React, { useState } from "react";
import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import ShowAllButton from "@/components/ui/ShowAllButton";
import FramerFadeIn from "@/components/ui/FramerFadeIn";

type UsedTechProps = {
  title: string;
  description: string;
  id: number;
};

const usedTech = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "Основной язык для создания интерактивных веб-приложений и клиентской логики.",
  },
  {
    id: 2,
    title: "TypeScript",
    description:
      "Надстройка над JavaScript, добавляющая строгую типизацию для повышения надежности кода.",
  },
  {
    id: 3,
    title: "Next.js",
    description:
      "React-фреймворк для создания масштабируемых и SEO-дружелюбных приложений.",
  },
  {
    id: 4,
    title: "Tailwind CSS",
    description:
      "Утилитарный CSS-фреймворк для быстрого создания адаптивных и аккуратных интерфейсов.",
  },
  {
    id: 5,
    title: "PostgreSQL",
    description:
      "Надежная реляционная база данных для хранения и обработки структурированных данных.",
  },
  {
    id: 6,
    title: "Node.js",
    description:
      "Среда для выполнения JavaScript на сервере, используется для создания API и серверной логики.",
  },
  {
    id: 7,
    title: "Express.js",
    description:
      "Легковесный фреймворк для Node.js, упрощающий создание REST API и серверов.",
  },
  {
    id: 8,
    title: "Render",
    description:
      "Платформа для хостинга веб-приложений и серверов с автоматическим деплоем.",
  },
  {
    id: 9,
    title: "Git",
    description:
      "Система контроля версий для отслеживания изменений в коде и совместной работы.",
  },
  {
    id: 10,
    title: "React",
    description:
      "JavaScript-библиотека для создания сложных пользовательских интерфейсов на основе компонентов.",
  },
  {
    id: 11,
    title: "GraphQL",
    description:
      "Гибкий язык запросов для API, позволяющий клиенту запрашивать только нужные данные.",
  },
  {
    id: 12,
    title: "Firebase",
    description:
      "Платформа Google для аутентификации, хранения данных, хостинга и аналитики.",
  },
];

const UsedTech = () => {
  const [filteredMaxNumber, setFilteredMaxNumber] = useState(4);

  return (
    <>
      <div className="px-4 container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {usedTech
          .filter((item: UsedTechProps) => item.id <= filteredMaxNumber)
          .map((item: UsedTechProps) => (
            <FramerFadeIn key={item.id}>
              <SpotlightCard
                className="hover:scale-104 duration-500 cursor-default"
                spotlightColor="rgba(255, 255, 255, 1)"
              >
                <div className="w-[350px] h-[400px] text-white">
                  <p className="font-semibold text-2xl">{item.title}</p>
                  <p className="max-w-[320px]">{item.description}</p>
                </div>
              </SpotlightCard>
            </FramerFadeIn>
          ))}
      </div>
      <div
        onClick={() => setFilteredMaxNumber(filteredMaxNumber === 4 ? 12 : 4)}
        className="w-full flex justify-center my-4"
      >
        <ShowAllButton filteredMaxNumber={filteredMaxNumber} />
      </div>
    </>
  );
};

export default UsedTech;
