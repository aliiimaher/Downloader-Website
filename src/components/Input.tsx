"use client";

import Image from "next/image";

import GoArrowSvg from "../assets/icons/goArrowSvg.svg";
import ShortGoArrowSvg from "../assets/icons/shortArrowGo.svg";
import { useEffect, useState } from "react";

interface Props {
  placeHolder: string;
  btnType: "instagram" | "youtube";
}

export default function Input({ placeHolder, btnType = "instagram" }: Props) {
  const [btnColor, setColorBtn] = useState("bg-[#7941CA]");
  useEffect(() => {
    if (btnType === "youtube") {
      setColorBtn("bg-[#FF0000]");
    }
  }, []);

  return (
    <>
      <div className="flex">
        <input
          placeholder={placeHolder}
          className={
            "bg-[#27285C] rounded-l-[20px] w-[255px] lg:w-[809px] " +
            "h-[56px] ps-[10px] lg:ps-[32px] text-[#E7E7E7] place-items-center"
          }
          color="rgba(231, 231, 231, 1)"
        />
        <button
          className={
            "flex rounded-r-[20px] items-center " +
            "justify-center w-[65px] md:w-[181px] " +
            btnColor
          }
        >
          <Image
            src={ShortGoArrowSvg}
            alt="short-arrow"
            className="block md:hidden"
          />
          <Image src={GoArrowSvg} alt="arrow" className="hidden md:flex" />
          <div
            style={{ marginLeft: "8px" }}
            className="min-[768px] hidden md:flex text-[#27285C]"
          >
            Go
          </div>
        </button>
      </div>
    </>
  );
}
