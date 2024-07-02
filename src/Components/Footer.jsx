import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot, FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="mt-10 p-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <h1 className="text-4xl mx-auto text-center my-8">get in touch</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className="flex flex-col gap-5 mx-auto">
                <div className="flex flex-row gap-1 items-center">
                    <IoMailSharp/>
                    <div>hei.marc.3@gmail.com</div>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <FaMapLocationDot/>
                    <div>address</div>
                </div>
                <div className="flex flex-row gap-1">
                    <BsFillTelephoneFill/>
                    <div>+261 0383062150</div>
                </div>
            </div>
            <form action="" className="flex flex-col gap-3 w-full">
                <div>
                    <label htmlFor="">email address</label>
                    <input type="text" placeholder="your email" className=" p-2 w-full h-14 dark:bg-gray-800 rounded-md" />
                </div>
                <div>
                    <label htmlFor="">message</label>
                    <textarea type="text" placeholder="your message" className="h-24 p-2 w-full dark:bg-gray-800 rounded-md" />
                </div>
                <input type="submit" value="send" className="p-2 w-24 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300"/>
            </form>
          
        </div>  
    
        <p className="text-center mt-14">© 2024 Razanajatovo Marc Herilala.</p>
      
    </footer>
  );
}

export default Footer;
