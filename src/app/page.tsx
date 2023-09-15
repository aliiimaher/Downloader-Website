import Button from "../components/Button";
import HomeIcon from "../assets/icons/home.svg";
import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-[20px]">
          <h1>
            <div style={{ fontFamily: "pacifico" }}>this is main page...</div>
            <Button icon={HomeIcon} text="Home" isSelectedBorder="yes" />
            <Input placeHolder="bashe" />
          </h1>
        </main>
      </body>
    </>
  );
}
