import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import ProfiPic from "../assets/imgs/pic-wthout-bg.png"
import Image from 'next/image';
import { useTranslations } from 'next-intl';
const Hero = () => {
  /*const floatAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };*/
   
  const t=useTranslations();

  return (
    <section id="home" className="min-h-screen flex items-center pt-8 dark:text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Social Links - Desktop */}
          <div className="hidden md:flex flex-col gap-10 pl-3">
            <a
              href="https://www.linkedin.com/in/marc-razanajatovo"
              target="_blank"
              
              aria-label='Voir le profil LinkedIn de Marc Herilala,un developpeur web - ouvre dans un nouvel onglet'
              className="text-2xl text-gray-500 dark:text-white hover:text-purple-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hei.marc.3@gmail.com"
              aria-label='envoyer un mail à Marc Herilala,developpeur web - ouvre dans un nouvel onglet'
              className="text-2xl text-gray-500 dark:text-white hover:text-purple-600 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/Marc985"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Voir le profil GitHub de Marc Razanajatovo - ouvre dans un nouvel onglet'
              className="text-2xl text-gray-500 dark:text-white hover:text-purple-600 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>

          <div
           
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex flex-col gap-2 items-center md:items-start">
              <h1 className="text-3xl md:text-4xl font-bold italic">RAZANAJATOVO</h1>
              <h2 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Marc Herilala
              </h2>
            </div>
            <p className="text-xl text-gray-600 mt-6 mb-8 max-w-2xl dark:text-white">
              {t("introduction")}
            </p>
            <a
              href="/Marc-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <div className="px-8 py-3 text-center relative cursor-pointer">
                <div className="w-5 h-5 border-4 border-l-purple-600 border-r-transparent border-t-blue-500 border-b-transparent absolute left-0 top-0"></div>
                <span className="text-gray-800 font-medium dark:text-white">{t("resume")}</span>
                <div className="w-5 h-5 border-4 border-l-transparent border-t-transparent border-b-blue-500 border-r-purple-600 absolute right-0 bottom-0"></div>
              </div>
            </a>
          </div>

          <div
            className="relative"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96  animate-float">
              <Image
                src={ProfiPic}
                alt="Marc profile"
                className="w-full h-full object-cover rounded-full border-4 border-dashed border-purple-600/30 p-2 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600/10 to-blue-500/10"></div>
            </div>
          </div>

          {/* Social Links - Mobile */}
          <div className="flex md:hidden gap-5 mt-8">
            <a
              href="https://www.linkedin.com/in/marc-razanajatovo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hei.marc.3@gmail.com"
              className="text-2xl text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/Marc985"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default  Hero;