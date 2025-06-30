import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import FramerFadeIn from "@/components/ui/FramerFadeIn";

export const metadata: Metadata = {
  title: "Оставить заявку",
};

const Page = () => {
  return (
    <div className="flex justify-center md:my-12">
      <FramerFadeIn>
        <section
          className="flex flex-col md:flex-row items-center justify-between rounded-3xl bg-white
      p-6 md:p-12 shadow-lg max-w-5xl mx-auto gap-6"
        >
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">Оставьте заявку на проект</h2>
            <p className="text-gray-600">
              Оставьте контакты, чтобы обсудить проект и условия сотрудничества,
              или позвоните:{" "}
              <a href="tel:+77071117804" className="text-blue-600 underline">
                +7 (707) 111 78-04
              </a>
            </p>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Имя или организация"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2
              focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Телефон или Email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2
              focus:ring-blue-600"
              />
              <textarea
                placeholder="Расскажите про проект"
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2
              focus:ring-blue-600"
              ></textarea>
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <p className="text-sm text-gray-600">
                  Подтверждаю своё ознакомление и согласие на обработку моих
                  персональных данных в соответствии с{" "}
                  <a href="#" className="text-blue-600 underline">
                    Политикой защиты и обработки персональных данных
                  </a>
                </p>
              </div>
              <button
                className="cursor-pointer mt-2 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white
              hover:bg-blue-700 transition"
              >
                Отправить
              </button>
            </form>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center">
            <Image
              src="https://www.simbirsoft.com/h/assets/img/temp/temp120.svg"
              alt="Illustration"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </section>
      </FramerFadeIn>
    </div>
  );
};

export default Page;
