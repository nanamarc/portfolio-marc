import React from "react";
import logo1 from "../assets/imgs/logo-dark-theme.png"
import logo2 from "../assets/imgs/logo-light.png"


function NavBar({onClick,icon}){
    return(
      <div className="flex flex-row w-full justify-between content-center items-center md:mt-[-20px]">
         <div className="">
          <img src={logo1} className="w-28  h-24 hidden md:hidden md:dark:block" alt="" />
          <img src={logo2} className="w-28  h-24 hidden md:dark:hidden md:block" alt="" />
         </div>
         <div onClick={onClick} className="text-black dark:text-white text-4xl mr-5">
            {icon}
         </div>
      </div>
    )
}
export default NavBar;