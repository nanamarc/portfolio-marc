"use client";

import React from "react";
import Image from "next/image";
import LanguageSelector from "./LangageSelector";
import LogoBlack from "../assets/imgs/MC-black.png";
import LogoWhite from "../assets/imgs/MC-light.png";
interface ClientNavBarProps {
  translations: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  onClick?: () => void;
  themeToggle?: React.ReactNode;
}

function ClientNavBar({ /*translations,*/themeToggle }: ClientNavBarProps) {
  return (
    <div className="flex flex-row w-full justify-between content-center items-center px-5 pt-3 md:fixed z-10 md:backdrop-blur-md md:bg-white/70 md:dark:bg-gray-900/70 transition-all duration-700">
      <div className="md:flex md:flex-row gap-28 items-center hidden">
        <div>
          <div className="mt-2">
            <Image
              src={LogoBlack}
              width={50}
              height={45}
              className="hidden md:block md:dark:hidden"
              alt="Logo"
            />
            <Image
              src={LogoWhite}
              width={50}
              height={45}
              className="hidden md:hidden md:dark:block"
              alt="Logo"
            />
          </div>
        </div>

       {
        
        
        
        
        /* <div>
          <ul className="flex flex-row gap-5 text-lg text-black dark:text-white">
            <li className="hover:text-purple-600 cursor-pointer">
              <a href="#home">{translations.home}</a>
            </li>
            <li className="hover:text-purple-600 cursor-pointer">
              <a href="#about">{translations.about}</a>
            </li>
            <li className="hover:text-purple-600 cursor-pointer">
              <a href="#projects">{translations.projects}</a>
            </li>
            <li className="hover:text-purple-600 cursor-pointer">
              <a href="#contact">{translations.contact}</a>
            </li>
          </ul>
        </div>*/
        
       }
      </div>

      <div className="w-full md:w-auto">
        <div className="text-gray-600 dark:text-white mr-5 flex flex-row justify-between gap-4 w-full items-center">
      { /*  <button className="bg-blue-600 rounded-md text-white py-1 px-5">Explore my blog</button> */}
          
          <LanguageSelector />
          {
            themeToggle
          }
        </div>
      </div>
    </div>
  );
}

export default ClientNavBar;