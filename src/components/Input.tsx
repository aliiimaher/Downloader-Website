import Image from "next/image";

import GoArrowSvg from "../assets/icons/goArrowSvg.svg";
import ShortGoArrowSvg from "../assets/icons/shortArrowGo.svg";

interface Props {
  placeHolder: string;
}

export default function Input({ placeHolder }: Props) {
  return (
    <>
      <div className="flex">
        <input
          placeholder={placeHolder}
          className="bg-[#27285C] rounded-l-[20px] py-[16px] ps-[10px] w-[255px] md:w-[809px] text-[#E7E7E7]"
          color="rgba(231, 231, 231, 1)"
        />
        <button className="bg-[#7941CA] flex rounded-r-[20px] items-center justify-center w-[65px] md:w-[181px]">
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
