import React from "react";
import FancyButton from "@/components/ui/FancyButton";
import Link from "next/link";

const RequestButton = () => {
  return (
    <Link href={"/leave-request"}>
      <FancyButton variant="primary" className="text-lg p-6 rounded-xl">
        Оставить заявку
      </FancyButton>
    </Link>
  );
};

export default RequestButton;
