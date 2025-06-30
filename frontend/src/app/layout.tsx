import React from "react";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const RubikSans = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RubikSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Jupiter - Веб-приложение для продвижение бизнеса",
    template: "%s - Jupiter",
  },
  description:
    "Jupiter разрабатывает современные веб-приложения и онлайн-сервисы для автоматизации бизнеса и увеличения прибыли.",
  keywords: [
    "разработка веб приложений",
    "онлайн сервисы для бизнеса",
    "автоматизация",
    "CRM",
    "Jupiter",
    "разработка веб приложений",
    "разработка онлайн сервисов",
    "создание сайтов для бизнеса",
    "автоматизация бизнес процессов",
    "веб-сервисы для компаний",
    "CRM системы",
    "ERP решения",
    "корпоративные сайты",
    "интернет приложения",
    "поддержка веб проектов",
    "интеграция API",
    "IT решения для бизнеса",
    "цифровая трансформация",
    "внедрение CRM",
    "бизнес автоматизация",
    "программные решения",
    "веб разработка",
    "создание интерфейсов",
    "UI UX дизайн",
    "Next.js",
    "React",
    "Tailwind",
    "TypeScript",
    "поддержка сайтов",
    "Jupiter",
  ],
  authors: [{ name: "Jupiter" }],
  creator: "Jupiter",
  publisher: "Jupiter",
  openGraph: {
    title: "Jupiter - Веб-приложения для вашего бизнеса",
    description:
      "Создаем веб-приложения и онлайн-сервисы для автоматизации и роста вашего бизнеса.",
    // url: "",
    siteName: "Jupiter",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jupiter — Веб-приложения для бизнеса",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jupiter — Веб-приложения для бизнеса",
    description:
      "Создаем онлайн-сервисы и IT-решения для автоматизации и роста вашего бизнеса.",
    images: ["/og-image.jpg"],
  },
  // metadataBase: new URL("TBA"),
};
