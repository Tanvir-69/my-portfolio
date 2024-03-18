"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "@/app/public/tanvir.png";
import Link from "next/link";
import "./Header.css";

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  display: "swap",
});

const Header = () => {
  const pathname = usePathname();
  return (
    <div className={`headerContainer ${merriweather.className}`}>
      <div className="headerLogoContainer">
        <Link href={"/"}>
          <Image className="headerLogo" src={Logo} alt="header logo" />
        </Link>
      </div>
      <div className="headerBtnContainer">
        <div className="headerBtnItems">
          <Link
            className={`headerBtnItem  ${pathname === "/" ? "active" : ""}`}
            href={"/"}
          >
            Home
          </Link>
          <Link
            className={`headerBtnItem ${
              pathname === "/projects" ? "active" : ""
            }`}
            href={"/projects"}
          >
            Projects
          </Link>
          <Link
            className={`headerBtnItem ${pathname === "/blogs" ? "active" : ""}`}
            href={"/blogs"}
          >
            Blogs
          </Link>
          <Link
            className={`headerBtnItem ${pathname === "/about" ? "active" : ""}`}
            href={"/about"}
          >
            About me
          </Link>
          <Link
            className={`headerBtnItem ${
              pathname === "/contact" ? "active" : ""
            }`}
            href={"/contact"}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
