
import React from 'react';
import { ArrowRight, Code2, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { GeometricBackground } from '../components/ui/geometric-shape';
import { cn } from '@/lib/utils';
import ProfiPic from "../assets/imgs/compressed-img.png"
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
  rel?: string;
  target?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ 
  href, 
  icon, 
  ariaLabel,
  rel = "noopener noreferrer",
  target = "_blank" 
}) => (
  <a
    href={href}
    target={target}
    rel={rel}
    aria-label={ariaLabel}
    className="social-link flex items-center justify-center w-10 h-10 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
  >
    {icon}
  </a>
);

const HeroSection = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-8 dark:text-white bg-white dark:bg-gray-900 overflow-hidden">
      {/* Geometric shapes background */}
      <GeometricBackground />
      
      {/* Content container */}
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Social Links - Desktop */}
          <div className="hidden md:flex flex-col gap-10 pl-3">
            <SocialLink 
              href="https://www.linkedin.com/in/marc-razanajatovo"
              icon={<Linkedin size={24} />}
              ariaLabel="View Marc Herilala's LinkedIn profile - opens in a new tab"
            />
            <SocialLink 
              href="mailto:hei.marc.3@gmail.com"
              icon={<Mail size={24} />}
              ariaLabel="Send an email to Marc Herilala - opens in a new tab"
              target="_self"
              rel=""
            />
            <SocialLink 
              href="https://github.com/MarcHerilala"
              icon={<Github size={24} />}
              ariaLabel="View Marc Razanajatovo's GitHub profile - opens in a new tab"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <p className="text-sm md:text-base uppercase tracking-wider text-purple-600 dark:text-purple-400 font-medium mb-1">
                Full Stack Developer
              </p>
              {
                /* 
                <h1 className="text-3xl md:text-4xl font-bold italic text-gray-800 dark:text-gray-100">
                RAZANAJATOVO
              </h1>
                */
              }
              <h2 className="text-5xl md:text-6xl font-semibold gradient-text">
                Marc Herilala
              </h2>
            </div>
            
            <div className="relative mt-6 mb-8">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
               I am a web developer with a collaborative spirit, ready to contribute to
                innovative projects and create impactful web solutions.
              </p>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full hidden md:block"></div>
            </div>
            
            <div className="flex gap-4 mt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 transform hover:translate-y-[-4px] hover:shadow-lg"
              >
                <Code2 size={20} className="group-hover:animate-pulse" />
                <span>Discover my projects</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative z-0">
            <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float-profile">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-md"></div>
              <div className="gradient-border rounded-full">
                <Image
                  src={ProfiPic}
                  alt="Marc profile"
                  width={400}
                  height={400}
                  className={cn(
                    "w-full h-full object-cover rounded-full p-1",
                    "shadow-[0_0_25px_rgba(139,92,246,0.3)] z-0"
                  )}
                />
              </div>
              
              <div className="absolute top-5 -right-8 w-16 h-16 bg-blue-500/20 rounded-full backdrop-blur-sm animate-float-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-purple-500/20 rounded-full backdrop-blur-sm animate-float-medium"></div>
            </div>
          </div>

          {/* Social Links - Mobile */}
          <div className="flex md:hidden gap-5 mt-8">
            <SocialLink 
              href="https://www.linkedin.com/in/marc-razanajatovo"
              icon={<Linkedin size={24} />}
              ariaLabel="View Marc Herilala's LinkedIn profile - opens in a new tab"
            />
            <SocialLink 
              href="mailto:hei.marc.3@gmail.com"
              icon={<Mail size={24} />}
              ariaLabel="Send an email to Marc Herilala - opens in a new tab"
              target="_self"
              rel=""
            />
            <SocialLink 
              href="https://github.com/Marc985"
              icon={<Github size={24} />}
              ariaLabel="View Marc Razanajatovo's GitHub profile - opens in a new tab"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;