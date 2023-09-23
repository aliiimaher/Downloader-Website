"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";

import YoutubeSvg from "../../../assets/icons/youtube.svg";
import HomeSvg from "../../../assets/icons/home.svg";
import InstagramSvg from "../../../assets/icons/insta.svg";

import { useForm } from "react-hook-form";

import axios from "axios";

type Inputs = {
  downloadLink: string;
};

export default function Instagram() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleDownload = async (data: Inputs) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/download-youtube",
        { url: data.downloadLink },
        { responseType: "blob" }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "video.mp4");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

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
              isSelectedBorder="yes"
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
            />
          </div>
          <h1
            className={
              "font-['roboto-bold'] italic md:text-[32px] w-full " +
              "text-center mt-[40px] mb-[20px]"
            }
          >
            Debb YouTube Downloader
          </h1>
          <div className="flex w-full justify-center md:mb-[40px]">
            <form onSubmit={handleSubmit(handleDownload)}>
              <Input
                placeHolder="Enter the link"
                btnType="youtube"
                reactHookForm={register("downloadLink", { required: true })}
              />
              {errors.downloadLink && (
                <span className="text-[#FF0000]">This field is required!</span>
              )}
            </form>
          </div>
          <p className="mt-[40px] mb-[24px] md:text-[24px] md:mt-0">
            How to download?
            <br />
            <br />
            First of all, in the YouTube copy the link of the selected video.
            Then past that in the above search box. And, at the end click the
            arrow. Done :)
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
            <video className="w-full mb-[40px] inline" controls>
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
