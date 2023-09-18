"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";

import YoutubeSvg from "../../../assets/icons/youtube.svg";
import HomeSvg from "../../../assets/icons/home.svg";
import InstagramSvg from "../../../assets/icons/insta.svg";

export default function Instagram() {
  return (
    <>
      <Header />
      <div className="flex w-full justify-center place-items-center">
        <div
          className={
            "flex flex-col items-start justify-center place-items-center " +
            "p-[20px] pb-0 md:px-0 md:pt-[4px] max-w-[360px] md:max-w-[990px]"
          }
        >
          <div className="flex flex-row justify-between w-full">
            <Button
              icon={YoutubeSvg}
              text="YouTube"
              onclick={() => (location.href = "/pages/youtube")}
            />
            <Button
              icon={HomeSvg}
              text="Home"
              onclick={() => (location.href = "/")}
            />
            <Button
              icon={InstagramSvg}
              text="Instagram"
              onclick={() => (location.href = "/pages/instagram")}
              isSelectedBorder="yes"
            />
          </div>
          <h1
            className={
              "font-['roboto-bold'] italic md:text-[32px] w-full " +
              "text-center mt-[40px] mb-[20px]"
            }
          >
            Debb Instagram Downloader
          </h1>
          <div className="flex w-full justify-center md:mb-[40px]">
            <Input placeHolder="Enter the link" btnType="instagram" />
          </div>
          <p className="mt-[40px] mb-[24px] md:text-[24px] md:mt-0">
            How to download?
            <br />
            <br />
            First of all, in the Instagram copy the link of the selected post or
            story. Then past that in the above search box. And, at the end click
            the arrow. Done :)
            <br />
            <br />
            Don’t worry if you don’t understand. I’ve prepared a short video in
            the following and you can do that step by step.
          </p>

          <div className="w-full flex flex-col">
            <div
              className={
                "flex w-full bg-[#27285C] font-[16px] " +
                "text-[#E7E7E7] rounded-[20px] h-[40px] place-items-center " +
                "pl-[10px] md:pl-[16px] mb-[8px]"
              }
            >
              Video
            </div>
            <video className="w-full mb-[40px] inline" autoPlay loop controls>
              <source
                src="/videos/videoTest.mp4"
                type="video/mp4"
                onError={(e) => console.error("Error loading video", e)}
              />
              Sorry, your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
