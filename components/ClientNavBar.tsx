"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoBlack from "../assets/imgs/MC-black.png";
import LogoWhite from "../assets/imgs/MC-light.png";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

interface ClientNavBarProps {
 
  onClick?: () => void;
  themeToggle?: React.ReactNode;
}

function ClientNavBar({ themeToggle }: ClientNavBarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // active le blur après 10px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-row w-full justify-between content-center items-center px-5 pt-3 md:fixed z-40 transition-all duration-700 ${
        scrolled ? "backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="md:flex md:flex-row gap-28 items-center hidden">
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

      <div className="w-full md:w-auto">
        <div className="text-gray-600 dark:text-white mr-5 flex flex-row justify-between gap-4 w-full items-center">
          <LanguageSwitcher />
          {themeToggle}
        </div>
      </div>
    </div>
  );
}

export default ClientNavBar;
