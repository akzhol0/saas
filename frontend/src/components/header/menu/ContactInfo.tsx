import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-start text-[15px]">
      <div className="flex items-center gap-2">
        <IoLogoWhatsapp />
        <p className="whitespace-nowrap">+7 (707) 111 78-04</p>
      </div>
      <div className="flex items-center gap-2">
        <FaLocationDot />
        <p className="whitespace-nowrap">Astana, Kazakhstan</p>
      </div>
    </div>
  );
};

export default ContactInfo;
