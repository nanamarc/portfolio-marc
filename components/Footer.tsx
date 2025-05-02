"use client";
import React, { useState } from "react";
import { IoMailSharp } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser"
import CalendlyPopupWidget from "./EmbededCalendly";



function Footer() {
    
     const form = useRef<HTMLFormElement>(null);
     const [loading,setIsLoading]=useState(false)
     const [showToast,setShowToast]=useState(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)

    if (form.current) {
      emailjs
        .sendForm('service_0c26xub', 'template_36p1a6j', form.current, 'tfoD6HZBFSUMPsbfQ')
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
              form.current?.reset()
        });
    }
  };
    setTimeout(() => {
      setShowToast(false);
    }, 5000);

    return (
    <footer id="contact" className="mt-10 p-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#090c1aec] dark:to-[#0c1020] dark:text-gray-200 transition-all duration-700">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl font-bold mb-8">Get in touch</h1>
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            <span className="text-lg ">Interested in my profile?</span>
           
            <CalendlyPopupWidget meet="Plan a meet" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <IoMailSharp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a href="mailto:hei.marc.3@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                    herilala1818@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <div className="bg-green-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <FaMapLocationDot className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Androndra, Antananarivo</span>
                </div>
                
                <div className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                  <div className="bg-purple-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <BsFillTelephoneFill className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <a href="tel:+261383062150" className="hover:text-blue-600 dark:hover:text-blue-400">
                    +261 38 30 621 50
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form 
            ref={form} 
            onSubmit={sendEmail}
            className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm"
          >
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email address <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full h-12 px-4 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message <span className="text-orange-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full h-32 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-all resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors disabled:opacity-70"
            >
              {loading ? (
                <div className="w-6 h-6 border-t-2 border-white rounded-full animate-spin mx-auto" />
              ) : "submit"}
            </button>
          </form>
        </div>

        {showToast && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
            Message sent successfully!
          </div>
        )}

        <p className="text-center mt-12 text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Razanajatovo Marc Herilala.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
