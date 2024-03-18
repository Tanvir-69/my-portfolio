import React from "react";
import "./Footer.css";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerText">
        <h1>&#169; 2024. All Rights Reserved.</h1>
        <h2>T&#8706;nvirul H&#8706;s&#8706;n</h2>
      </div>
      <div className="footerLinkContainer">
        <Link href={""}>
          <MdAlternateEmail color="" size={20} />
        </Link>
        <Link href={""}>
          <FaLinkedin color="" size={20} />
        </Link>
        <Link href={""}>
          <FaGithub color="" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
