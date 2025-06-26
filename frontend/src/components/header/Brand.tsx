import React from "react";
import { DM_Serif_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const dmSerif = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Brand = () => {
  return (
    <div>
      <Link href="/">
        <div className={`${dmSerif.className} flex items-center gap-4`}>
          <div>
            <Image src="/img/brand.png" width={40} height={40} alt="logo" />
          </div>
          <div className="font-semibold text-[42px] text-[#0a0a0a]">
            Jupiter
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Brand;
