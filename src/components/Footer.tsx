import Image from "next/image";

import GithubSvg from "../assets/icons/bi_github.svg";
import LinkedInSvg from "../assets/icons/linkedIn.svg";
import TelegramSvg from "../assets/icons/telegram.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-[#27285C] text-[#E7E7E7] p-[20px] flex flex-col place-items-center">
        <div
          className="mb-[20px] text-center md:mb-[40px]"
          style={{ fontFamily: "pacifico", fontSize: "20px", color: "#E7E7E7" }}
        >
          Downloader with
          <span
            style={{ fontFamily: "pacifico", color: "red", fontSize: "20px" }}
          >
            {" "}
            love{" "}
          </span>
          by Ali Maher
        </div>
        <div className="flex flex-col place-items-center">
          <strong className="text-[#E7E7E7] mb-[16px] text-[20px]">Contact me</strong>
          <div className="flex flex-col place-items-center md:flex-row md:w-[477px] justify-between md:mb-[55px]">
            <div className="flex mb-[8px] md:mb-0">
              <Image
                src={GithubSvg}
                alt="github-icon"
                height={24}
                width={24}
                className="mr-[8px]"
              />
              <a
                href="https://github.com/aliiimaher"
                className="text-[#E7E7E7] text-[20px] underline"
              >
                GitHub
              </a>
            </div>

            <div className="flex mb-[8px] md:mb-0 md:">
              <Image
                src={LinkedInSvg}
                alt="github-icon"
                height={24}
                width={24}
                className="mr-[8px]"
              />
              <a
                href="https://www.linkedin.com/in/aliiii-maher/"
                className="text-[#E7E7E7] text-[20px] underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex">
              <Image
                src={TelegramSvg}
                alt="github-icon"
                height={24}
                width={24}
                className="mr-[8px]"
              />
              <a
                href="https://t.me/aliiiimaher"
                className="text-[#E7E7E7] text-[20px] underline"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
