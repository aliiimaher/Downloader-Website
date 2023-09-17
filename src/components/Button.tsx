"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  icon: string;
  text?: string;
  type?: "button" | "submit";
  onclick?: () => void;
  isSelectedBorder?: "yes" | "no";
}

export default function Button({
  icon,
  text,
  type = "button",
  onclick,
  isSelectedBorder = "no",
}: Props) {
  const [border, setBorder] = useState("");
  useEffect(() => {
    if (isSelectedBorder === "yes") {
      setBorder("outline outline-[2px] outline-[#ff0000]");
    }
  }, []);

  return (
    <>
      <button
        className={
          "inline-flex justify-center w-[92px] md:w-[181px] h-[60px] " +
          "rounded-[20px] drop-shadow-[0px_5px_4px_#00000040] place-items-center " +
          "bg-[#27285C] " +
          border
        }
        type={type}
        onClick={onclick}
      >
        <Image src={icon} alt="icon" className="w-[32px] h-[32px]" />
        <div className="text-[#E7E7E7] ps-[8px] hidden md:block">
          {text ? text : ""}
        </div>
      </button>
    </>
  );
}
