"use client";
import Image from "next/image";
import HomeImage from "@/app/public/author.jpg";
import Button from "@/app/components/button/Button";
import "./HomePage.css";
import ProjectPage from "../projects/page";

export default function HomePage() {
  const buttonHandler = () => {
    console.log("button clicked");
  };
  return (
    <>
      <div className="mainContainer">
        <div className="imageContainer">
          <Image className="image" src={HomeImage} alt="image of author" />
        </div>
        <div className="contentContainer">
          <h1 className="text pb-4">Hi, I am Tanvirul Hasan</h1>
          <p className="text-xl">
            UI/UX designer on a mission to blend{" "}
            <span className="text-red-400">creativity, usability,</span> and{" "}
            <br />
            <span className="text-red-400">accessibility</span>.Join me in
            bringing a touch of elegance to every <br /> digital interaction,
            ensuring inclusivity in design.
          </p>
          <div className="btnGroup">
            <Button title="Get in touch" buttonHandler={buttonHandler} />
            <Button title="Download CV" buttonHandler={buttonHandler} />
          </div>
        </div>
      </div>
      {/* <ProjectPage /> */}
    </>
  );
}
