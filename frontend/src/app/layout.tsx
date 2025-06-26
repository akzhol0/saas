import React from "react";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const RubikSans = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "SaaS",
  description: "SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${RubikSans.className} antialiased`}>{children}</body>
    </html>
  );
}
