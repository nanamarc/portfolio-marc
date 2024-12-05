import React from "react";
import logo1 from "../assets/imgs/MC-black.png"
import logo2 from "../assets/imgs/MC-light.png"
import LanguageSelector from "./LangageSelector";



function NavBar({onClick,icon}){
    return(
      <div className="flex flex-row w-full justify-between  content-center items-center px-5 pt-3">
        
         <div className="flex flex-row gap-28 items-center">
         <div>
         {  
            <div className="mt-2">
              <img src={logo1} className="w-18  h-[45px] hidden md:block md:dark:hidden" alt="" />
              <img src={logo2} className="w-18  h-[45px] hidden md:hidden md:dark:block" alt="" />
            </div>
          }
         </div>
       
            <div>
              <ul className="flex flex-row gap-5 text-lg dark:text-white">
                <li>home</li>
                <li>about</li>
                <li>project</li>
              </ul>
            </div>
         </div>
         
         <div className="w-full md:w-auto">
            <div  className="text-gray-600 dark:text-white  mr-5 flex flex-row justify-between gap-4 w-full items-center">
          
              <LanguageSelector/>
              <p onClick={onClick} className="text-4xl">{icon}</p>
            </div>
         </div>
      </div>
    )
}
export default NavBar;