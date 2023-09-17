import Image from "next/image";

import WebsiteIconPng from "../assets/icons/icon.png";

export default function Header() {
  return (
    <>
      <div className="w-full flex flex-col place-items-center">
        <div className="flex flex-row justify-center align-middle place-items-center h-[56px] w-[275px]">
          <div
            style={{
              fontFamily: "pacifico",
              fontSize: "32px",
              marginRight: "4px",
            }}
          >
            Debb
          </div>
          <Image
            src={WebsiteIconPng}
            alt="website-icon"
            className="w-[32px] h-[32px]"
          />
          <p
            style={{
              fontFamily: "pacifico",
              fontSize: "32px",
              marginLeft: "4px",
            }}
          >
            Downloader
          </p>
        </div>
        <div className="w-full border border-[#27285C] mt-[20px] mb-[16px] md:mb-[24px]"></div>
      </div>
    </>
  );
}
