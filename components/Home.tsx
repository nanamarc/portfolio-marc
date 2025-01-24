import React from 'react';
import { ArrowRight, Code2, Github, Linkedin, Mail } from 'lucide-react';
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
             <div className="flex gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <Code2 size={20} className="group-hover:animate-pulse" />
                <span>{t("discover-project")}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
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