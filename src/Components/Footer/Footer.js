import "./Footer.css";
import React from "react";
import { AiOutlineCopyright, AiFillLinkedin } from "react-icons/ai";
import { SiWeb3Dotjs } from "react-icons/si";
import { FaReact, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>
        <AiOutlineCopyright /> 2023
      </p>
      <p>
        This dapp is created using <FaReact className="build-icons" /> and
        <SiWeb3Dotjs className="build-icons" />
      </p>
      <div className="external-links-wrapper">
        <a
          href="https://www.linkedin.com/in/n4ku1-v454n7h-vk/"
          target="_blank"
          className="external-links"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/nakul-vk"
          target="_blank"
          className="external-links"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
