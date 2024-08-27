import React from "react";
import Pic from "../assets/imgs/compressed-img.png"
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function Home(){
  const {t}=useTranslation();
  const container = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
    return (
        <div className="flex flex-col gap-6 md:flex-row items-center dark:bg-gray-900 dark:text-gray-200">
         
           <div className="md:flex md:flex-col md:gap-10  md:pl-3 hidden">
              <a href="https://www.linkedin.com/in/marc-razanajatovo" target="blank" className="text-2xl text-gray-500 dark:text-gray-200  icon"><FaLinkedin/></a>
              <a href="mailto:hei.marc.3@gmail.com" className="text-2xl text-gray-500  dark:text-gray-200 icon"><SiGmail/></a>
              <a href="https://github.com/Marc985" target="blank" className="text-2xl text-gray-500 dark:text-gray-200 icon"><FaGithub/></a>
           </div>
            

            <motion.div className="flex flex-col md:flex-row gap-10 place-content-center content-center items-center w-full"
               variants={container}
               initial="hidden"
              animate="visible"
            >
                <motion.div variants={item}>
                  <div className="flex flex-col gap-2 items-center">  
                    <p className="highSize dark:text-white italic text-center">RAZANAJATOVO</p>
                    <p className="highSize2  italic text-center font-semibold bg-gradient-to-r from-[#274a47ec] dark:from-[#7dc6c0ec] via-[#95d4ce] dark:to-[#c3ddf5]  to-[#5b6c7c] bg-clip-text text-transparent">Marc Herilala</p>
                  </div>
                  <div className="text-center">{t("introduction")}</div>
                    <a href="/Marc-CV.pdf" target="blank">
                      <div className="text-center w-40 h-10 pt-2 mx-auto relative cursor-pointer mt-5">
                        <div className="w-5 h-5 border-4 border-l-[#33625eec] border-r-transparent border-t-[#70bcb7ec] border-b-transparent absolute left-0 top-0"></div>
                        <p>{t("resume")}</p>
                        <div  className="w-5 h-5 border-4 border-l-transparent border-t-transparent border-b-[#70bcb7ec] border-r-[#33625eec] absolute right-0 bottom-0"></div>
                      </div>
                    </a>
                  <div>
                    <div></div>
                  </div>
                </motion.div>
                <motion.div className="" variants={item}><img src={Pic} className="rounded-full border border-dashed border-black dark:border-white shadow-2xl w-96" alt="marc profile" /></motion.div>
            </motion.div>
            <div>
                
            </div>
             <div className="flex flex-row gap-5  md:hidden ">
              <a href="https://www.linkedin.com/in/marc-razanajatovo" className="text-2xl text-gray-500 dark:text-gray-200  icon"><FaLinkedin/></a>
              <a href="mailto:hei.marc.3@gmail.com"  className="text-2xl text-gray-500 dark:text-gray-200 icon"><SiGmail/></a>
              <a href="https://github.com/Marc985"className="text-2xl text-gray-500 dark:text-gray-200 icon"><FaGithub/></a>
           </div>
           
        </div>
    )
    
}
export default Home;