import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { auth } from "../../context/Auth";
const Footer = () => {
  const { user } = auth();
  return (
    <div
      className={`py-16 bg-black-500 overflow-hidden lang-${user?.setting.lang}`}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-7 container mx-auto">
        <div>
          <img src="./images/Footer Logos.png (2).png" />
          <h2 className="text-white text-lg">MAHARA-TECH</h2>
        </div>
        <div className="flex items-center justify-center">
          <Link className="text-white" to={"/"}>
            Home
          </Link>
        </div>
        <div className="flex items-center md:justify-center gap-x-2 text-white">
          <a
            href="#"
            className="w-[40px] h-[40px] hover:bg-white duration-300 ease-in-out  items-center shadow-lg hover:text-black  rounded-full  flex justify-center "
          >
            <FaFacebookF className="" />
          </a>
          <a
            href="#"
            className="w-[40px] h-[40px] hover:bg-white duration-300 ease-in-out  items-center shadow-lg hover:text-black  rounded-full flex justify-center "
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="w-[40px] h-[40px] hover:bg-white duration-300 ease-in-out  items-center shadow-lg hover:text-black rounded-full  flex justify-center "
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
