"use client";

import Image from "next/image";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import YoutubeSvg from "../assets/icons/youtube.svg";
import HomeSvg from "../assets/icons/home.svg";
import InstagramSvg from "../assets/icons/insta.svg";
import TurningLogoSvg from "../assets/images/TurningLogoInHome.svg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex w-full justify-center place-items-center">
        <div
          className={
            "flex w-full flex-col items-start justify-center place-items-center " +
            "p-[20px] pb-0 md:px-0 md:pt-[4px] max-w-[990px]"
          }
        >
          <div className="flex flex-row justify-between w-full">
            <Button
              icon={YoutubeSvg}
              text="YouTube"
              onclick={() => (location.href = "/pages/youtube")}
            />
            <Button icon={HomeSvg} text="Home" isSelectedBorder="yes" />
            <Button
              icon={InstagramSvg}
              text="Instagram"
              onclick={() => (location.href = "/pages/instagram")}
            />
          </div>
          <div
            className={
              "relative w-full justify-center my-[40px] hidden md:inline-flex"
            }
          >
            <Image
              src={TurningLogoSvg}
              alt="turning-logo"
              className="object-cover transition-transform transform hover:scale-110"
            />
          </div>
          <p className="my-[40px] md:text-[24px] md:mt-0">
            Hey body, welcome...
            <br />
            <br />
            This is Debb Downloader, you can easily download from the YouTube
            and the Instagram. All you need is a copy & past :)
            <br />
            <br />
            You can select whether you want to download from the YouTube or
            Instagram by clicking the related button in the header.
            <br />
            <br />
            Other guidance are available in each pages.
            <br />
            <br />
            Finally, if you have any comments or suggestions, please share them
            with me.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
