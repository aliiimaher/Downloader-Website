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
      setBorder("outline outline-[4px] outline-[#ff0000]");
    }
  }, []);

  return (
    <>
      <button
        className={
          "inline-flex justify-center w-[181px] h-[60px] py-[14px] px-[38px] rounded-[20px] drop-shadow-[0px_5px_4px_#00000040] " +
          border
        }
        type={type}
        onClick={onclick}
        style={{ backgroundColor: "#27285C" }}
      >
        <Image src={icon} alt="icon" height={32} width={32} />
        <div style={{ color: "#E7E7E7", paddingLeft: "8px" }}>
          {text ? text : ""}
        </div>
      </button>
    </>
  );
}
