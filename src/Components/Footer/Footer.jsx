import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a
        href="mailto:prijithpj2001@gmail.com"
      >prijithpj2001@gmail.com</a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a 
            href="https://www.linkedin.com/in/prijithpj" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/in/prijithpj
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaPhoneAlt size={20} />
          <a href="tel:+919074545750">+91 90745 45750</a> {/* Your phone number */}
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          prijithpj1233github.com
        </li>
      </ul>
    </div>
  );
};

export default Footer;
