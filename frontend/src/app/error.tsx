"use client";

import { useEffect } from "react";
import FancyButton from "@/components/ui/FancyButton";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center py-[200px]">
      <h2 className="text-center">Найдена ошибка в коде!</h2>
      <span className="mt-2" onClick={() => reset()}>
        <FancyButton variant={"danger"} className="px-8">
          Перезагрузить
        </FancyButton>
      </span>
    </div>
  );
}
