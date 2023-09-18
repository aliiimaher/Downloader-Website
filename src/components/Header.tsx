import Image from "next/image";

import WebsiteIconPng from "../assets/icons/icon.png";

export default function Header() {
  return (
    <>
      <div className="w-full flex flex-col place-items-center mt-[20px]">
        <div
          className={
            "flex flex-row justify-center align-middle" +
            "place-items-center h-[56px] w-[275px] items-center"
          }
        >
          <div className="text-[32px] mr-[4px] font-['pacifico']">Debb</div>
          <Image
            src={WebsiteIconPng}
            alt="website-icon"
            className="w-[32px] h-[32px] "
          />
          <p className="text-[32px] ml-[4px] font-['pacifico']">Downloader</p>
        </div>
        <div
          className={
            "w-full border border-[#27285C] mt-[20px] mb-[16px] " +
            "md:mb-[24px] max-w-[990px]"
          }
        ></div>
      </div>
    </>
  );
}
