import { navLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-black px-6 lg:px-28 py-10">
      {/* Footer Content Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        {/* Left Section: Logo and Navigation Links */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl text-white font-bold">loopstudios</h1>
          <div className="flex flex-col lg:flex-row pt-4 lg:pt-0">
            <ul className="nav-ul flex flex-col lg:flex-row py-4 gap-4 lg:gap-8">
              {navLinks.map((item) => (
                <li key={item.id} className="nav-li">
                  <a
                    href={item.href}
                    className="nav-li_a text-white hover:text-neutral-600 font-medium"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Social Icons and Copyright */}
        <div className="flex flex-col items-center lg:items-start pt-8 lg:pt-0">
          <div className="flex flex-row justify-evenly items-center gap-6 pb-8">
            <img
              src="/images/icon-instagram.svg"
              alt="Instagram"
              className="w-6 h-6"
            />
            <img
              src="/images/icon-facebook.svg"
              alt="Facebook"
              className="w-6 h-6"
            />
            <img
              src="/images/icon-twitter.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
            <img
              src="/images/icon-pinterest.svg"
              alt="Pinterest"
              className="w-6 h-6"
            />
          </div>
          <h1 className="text-neutral-500 text-center lg:text-left pb-5">
            @ 2024 loopstudios. All rights reserved.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
