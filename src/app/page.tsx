import Button from "../components/Button";
import HomeIcon from "../assets/icons/home.svg";

export default function Home() {
  return (
    <>
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1>
            <div style={{ fontFamily: "pacifico" }}>this is main page...</div>
            <Button icon={HomeIcon} text="Home" isSelectedBorder="yes" />
          </h1>
        </main>
      </body>
    </>
  );
}
