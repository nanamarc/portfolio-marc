import React, { useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import emailjs from "@emailjs/browser"

function Footer() {
    const {t}=useTranslation()
    
     const form = useRef();
     const [loading,setIsLoading]=useState(false)
     const [showToast,setShowToast]=useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)

    emailjs
      .sendForm('service_0c26xub', 'template_36p1a6j', form.current, {
        publicKey: 'tfoD6HZBFSUMPsbfQ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      ).finally(()=>{
            setIsLoading(false)
            setShowToast(true)
      });
  };
    setTimeout(() => {
      setShowToast(false);
    }, 5000);

  return (
    <footer className="mt-10 p-4 bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <h1 className="text-4xl mx-auto text-center my-8">{t("getInTouch")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            <div className="flex flex-col gap-5 mx-auto">
                <div className="flex flex-row gap-1 items-center">
                    <IoMailSharp/>
                    <div>hei.marc.3@gmail.com</div>
                </div>
                <div className="flex flex-row gap-1 items-center">
                    <FaMapLocationDot/>
                    <div>Androndra,Antananarivo</div>
                </div>
                <div className="flex flex-row gap-1">
                    <BsFillTelephoneFill/>
                    <div>+261 383062150</div>
                </div>
            </div>
            <form action="" className="flex flex-col gap-3 w-full" ref={form} onSubmit={sendEmail}>
                <div>
                    <label htmlFor="">{t("emailAddress")}</label>
                    <input type="text" placeholder="your email" className=" p-2 w-full h-14 dark:bg-gray-800 rounded-md"
                    name="user_email" required
                    />
                </div>
                <div>
                    <label htmlFor="">message</label>
                    <textarea type="text" placeholder="your message" className="h-24 p-2 w-full dark:bg-gray-800 rounded-md"
                    name="message" required
                    />
                </div>
                <button type="submit" className="p-2 w-24 rounded-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300">{!loading?"submit":<div className="w-6 h-6 border-t-2 border-b-black rounded-full animate-spin mx-auto"></div>}</button>
            </form>
            {showToast && (
                <div className="toast toast-end">
                    <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                </div>
      )}
        </div>  
    
        <p className="text-center mt-14">© 2024 Razanajatovo Marc Herilala.</p>
      
    </footer>
  );
}

export default Footer;
