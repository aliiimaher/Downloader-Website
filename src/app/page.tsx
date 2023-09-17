import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import YoutubeSvg from "../assets/icons/youtube.svg";
import HomeSvg from "../assets/icons/home.svg";
import InstagramSvg from "../assets/icons/insta.svg";

export default function Home() {
  return (
    <>
      <Header />
      <div
        className={
          "flex w-full flex-col items-start justify-center " +
          "p-[20px] pb-0 md:px-[225px] md:pt-[4px]"
        }
      >
        <div className="flex flex-row justify-between w-full">
          <Button icon={YoutubeSvg} text="YouTube" />
          <Button icon={HomeSvg} text="Home" isSelectedBorder="yes" />
          <Button icon={InstagramSvg} text="Instagram" />
        </div>
        <p className="my-[40px]">
          Hey body, welcome...
          <br />
          <br />
          This is Debb Downloader, you can easily download
          from the YouTube and the Instagram. All you need is a copy & past :)
          <br />
          <br />
          You can select whether you want to download from the YouTube or
          Instagram by clicking the related button in the header.
          <br />
          <br />
          Other guidance are available in each pages. 
          <br />
          <br />
          Finally, if you have any comments or
          suggestions, please share them with me.
        </p>
      </div>
      <Footer />
    </>
  );
}
