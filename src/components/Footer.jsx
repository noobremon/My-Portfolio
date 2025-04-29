import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaGithub, } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex flex-col items-center gap-2">
      <div className="flex gap-6 mb-1">
        <a
          href="https://www.instagram.com/rajarshii_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a href="https://x.com/Rajarsh87550436" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/rajarshi-das-5923b2291/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="https://github.com/noobremon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
      </div>
      <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Rajarshi Das. All rights reserved.</div>
    </footer>
  );
};

export default Footer;