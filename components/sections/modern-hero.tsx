"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { ModernButton } from '../ui/modern-button';
import { AnimatedBackground, FloatingElements } from '../ui/animated-background';
import ProfilPic from "../../assets/imgs/compressed-img.png";

export const ModernHero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      {/* Animated Background */}
      <AnimatedBackground variant="particles" />
      <FloatingElements />
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                Available for new opportunities
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Hi, I'm</span>
                <span className="block text-gradient-primary">Marc Herilala</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-muted-foreground">
                <motion.span
                  className="inline-block"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Full Stack Developer
                </motion.span>
                <span className="mx-2">•</span>
                <span>Problem Solver</span>
                <span className="mx-2">•</span>
                <span>Tech Enthusiast</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              I craft exceptional digital experiences through innovative web solutions. 
              Passionate about creating scalable applications that make a difference.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <ModernButton
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                glow
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </ModernButton>
              
              <ModernButton
                variant="outline"
                size="lg"
                leftIcon={<Download className="w-5 h-5" />}
                onClick={() => window.open('/Marc-CV.pdf', '_blank')}
              >
                Download CV
              </ModernButton>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-4">
              {[
                { icon: Mail, href: "mailto:herilala1818@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/MarcHerilala", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/marc-razanajatovo", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            variants={imageVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              
              {/* Main image container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl scale-110" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    src={ProfilPic}
                    alt="Marc Herilala - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-accent/10" />
                </div>
                
                {/* Floating tech icons */}
                {[
                  { icon: "⚛️", position: "top-4 left-4", delay: 0 },
                  { icon: "🚀", position: "top-8 right-8", delay: 1 },
                  { icon: "💻", position: "bottom-8 left-8", delay: 2 },
                  { icon: "🎨", position: "bottom-4 right-4", delay: 3 },
                ].map(({ icon, position, delay }) => (
                  <motion.div
                    key={icon}
                    className={`absolute ${position} w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl border border-white/20`}
                    animate={{
                      y: [0, -8, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: delay * 0.5,
                    }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <p className="text-xs text-muted-foreground mt-2 text-center">Scroll down</p>
        </motion.div>
      </div>
    </section>
  );
};