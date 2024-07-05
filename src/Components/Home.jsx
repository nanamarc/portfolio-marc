import React from "react";
import Pic from "../assets/imgs/pic-wthout-bg.png"
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function Home(){
  const {t}=useTranslation();
    return (
        <div className="flex flex-col gap-6 md:flex-row items-center dark:bg-gray-800 dark:text-gray-200">
         
          
           <div className="md:flex md:flex-col md:gap-10  md:pl-3 hidden">
              <a href="https://www.linkedin.com/in/marc-razanajatovo" target="blank" className="text-2xl text-gray-500 dark:text-gray-200  icon"><FaLinkedin/></a>
              <a href="mailto:hei.marc.3@gmail.com" className="text-2xl text-gray-500  dark:text-gray-200 icon"><SiGmail/></a>
              <a href="https://github.com/Marc985" target="blank" className="text-2xl text-gray-500 dark:text-gray-200 icon"><FaGithub/></a>
           </div>
            

                        

            <div className="flex flex-col md:flex-row gap-10 place-content-center content-center items-center w-full
           
            ">
                <div>
                  <div className="flex flex-col gap-2 items-center">  
                    <p className="highSize dark:text-white italic text-center">RAZANAJATOVO</p>
                    <p className="highSize2 dark:text-white italic text-center">Marc Herilala</p>
                  </div>
                  <div className="text-center">{t("introduction")}</div>
                      <div className="text-center w-40 h-10 pt-2 mx-auto relative cursor-pointer mt-5">
                        <div className="w-5 h-5 border  border-l-red-700 border-r-transparent border-t-red-700 border-b-transparent absolute left-0 top-0"></div>
                        <p>{t("resume")}</p>
                        <div  className="w-5 h-5 border border-l-transparent border-t-transparent border-b-red-700 border-r-red-700 absolute right-0 bottom-0"></div>
                      </div>
                  <div>
                    <div></div>
                  </div>
                </div>
                <div className=""><img src={Pic} className="rounded-full border border-dashed border-black dark:border-white shadow-2xl w-96" alt="marc profile" /></div>
            </div>
            <div>
                
            </div>
             <div className="flex flex-row gap-5  md:hidden ">
              <div className="text-2xl text-gray-500 dark:text-gray-200  icon"><FaLinkedin/></div>
              <div className="text-2xl text-gray-500 dark:text-gray-200 icon"><SiGmail/></div>
              <div className="text-2xl text-gray-500 dark:text-gray-200 icon"><FaGithub/></div>
           </div>
           
        </div>
    )
    
}
export default Home;