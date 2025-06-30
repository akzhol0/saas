"use client";

import React, { useState } from "react";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import FancyButton from "@/components/ui/FancyButton";
import FramerFadeIn from "@/components/ui/FramerFadeIn";
import ShowAllButton from "@/components/ui/ShowAllButton";

type WorkingStaffProps = {
  title: string;
  description: string;
  tech: string;
  id: number;
};

const workingStaff = [
  {
    title: "Frontend Developer",
    description: "Разработка клиентской части веб-приложений и интерфейсов.",
    tech: "Next.js, React, TypeScript, Tailwind",
    id: 1,
  },
  {
    title: "Backend Developer",
    description: "Разработка серверной логики, API и работы с базами данных.",
    tech: "Node.js, Express, PostgreSQL, Firebase",
    id: 2,
  },
  {
    title: "Software Architect",
    description:
      "Проектирование архитектуры приложений, выбор технологий и паттернов.",
    tech: "Microservices, Domain-Driven Design, Kubernetes",
    id: 3,
  },
  {
    title: "DevOps Engineer",
    description: "Автоматизация CI/CD, настройка облаков и мониторинг систем.",
    tech: "Docker, GitHub Actions, AWS, Prometheus",
    id: 4,
  },
  {
    title: "UI/UX Designer",
    description: "Дизайн интерфейсов и пользовательских сценариев.",
    tech: "Figma, Adobe XD, User Flows, Wireframes",
    id: 5,
  },
  {
    title: "Graphic Designer",
    description: "Создание иллюстраций, брендовых элементов и медиа.",
    tech: "Photoshop, Illustrator, After Effects",
    id: 6,
  },
  {
    title: "QA Engineer",
    description:
      "Тестирование качества, составление чек-листов и баг-репортов.",
    tech: "Jira, Manual Testing, Postman",
    id: 7,
  },
  {
    title: "Product Manager",
    description: "Определение требований к продуктам, приоритеты и roadmaps.",
    tech: "Scrum, Confluence, Customer Interviews",
    id: 8,
  },
  {
    title: "B2B Sales Manager",
    description: "Поиск клиентов, проведение переговоров и сделок.",
    tech: "CRM, B2B Sales, Deal Closing",
    id: 9,
  },
  {
    title: "Customer Support",
    description: "Поддержка пользователей и клиентов по продуктам компании.",
    tech: "Helpdesk, Email, CRM",
    id: 10,
  },
  {
    title: "Security Specialist",
    description: "Обеспечение кибербезопасности сервисов и аудит уязвимостей.",
    tech: "OWASP, Penetration Testing",
    id: 11,
  },
  {
    title: "System Administrator",
    description: "Поддержка серверов, сетей и инфраструктуры.",
    tech: "Linux, Nginx, VPN, Zabbix",
    id: 12,
  },
];

const Staff = () => {
  const [filteredMaxNumber, setFilteredMaxNumber] = useState(4);

  return (
    <>
      <div className="px-4 container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-4 place-items-center">
        {workingStaff
          .filter((item: WorkingStaffProps) => item.id <= filteredMaxNumber)
          .map((item: WorkingStaffProps) => (
            <FramerFadeIn key={item.id}>
              <TiltedCard
                imageSrc="https://i.pinimg.com/736x/81/1c/6c/811c6c20eef3aa38625079dad945c42e.jpg"
                containerHeight={400}
                containerWidth={350}
                imageHeight={400}
                imageWidth={350}
                showTooltip={false}
                rotateAmplitude={12}
                scaleOnHover={1.06}
                displayOverlayContent={true}
                overlayContent={
                  <div className="absolute top-4 left-4">
                    <div className="flex flex-col">
                      <FancyButton
                        className="whitespace-nowrap"
                        variant={"gray"}
                      >
                        {item.title}
                      </FancyButton>
                      <p className="p-1 text-white">{item.description}</p>
                    </div>
                  </div>
                }
              />
            </FramerFadeIn>
          ))}
      </div>
      <div
        onClick={() => setFilteredMaxNumber(filteredMaxNumber === 4 ? 12 : 4)}
        className="my-4"
      >
        <ShowAllButton filteredMaxNumber={filteredMaxNumber} />
      </div>
    </>
  );
};

export default Staff;
