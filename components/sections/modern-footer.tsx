"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ModernButton } from '../ui/modern-button';
import { GradientDivider } from '../ui/section-divider';
import LogoBlack from "../../assets/imgs/MC-black.png";
import LogoWhite from "../../assets/imgs/MC-light.png";

export const ModernFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Projects",
      links: [
        { label: "Innova APP", href: "https://hiu-2025-bisounours.vercel.app/" },
        { label: "Patrimoine", href: "https://patrimoine-three.vercel.app/" },
        { label: "E-Car", href: "https://e-car-gamma.vercel.app/" },
        { label: "Mada Green", href: "https://environment-inky.vercel.app/" },
        { label: "View All", href: "#projects" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Resume", href: "/Marc-CV.pdf" },
        { label: "GitHub", href: "https://github.com/MarcHerilala" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marc-razanajatovo" },
        { label: "Email", href: "mailto:herilala1818@gmail.com" },
      ]
    }
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:herilala1818@gmail.com",
      label: "Email",
      color: "hover:text-blue-500"
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/MarcHerilala",
      label: "GitHub",
      color: "hover:text-gray-600 dark:hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/marc-razanajatovo",
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border">
      {/* Back to Top Button */}
      <motion.div
        className="absolute -top-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <ModernButton
          variant="primary"
          size="md"
          onClick={scrollToTop}
          className="rounded-full w-12 h-12 p-0 shadow-lg"
          glow
        >
          <ArrowUp className="w-5 h-5" />
        </ModernButton>
      </motion.div>

      <div className="container mx-auto px-6 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <Image
                    src={LogoBlack}
                    alt="Marc Herilala Logo"
                    fill
                    className="object-contain dark:hidden"
                  />
                  <Image
                    src={LogoWhite}
                    alt="Marc Herilala Logo"
                    fill
                    className="object-contain hidden dark:block"
                  />
                </div>
                <span className="text-xl font-bold text-gradient-primary">
                  Marc Herilala
                </span>
              </Link>
              
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer passionate about creating innovative web solutions 
                that make a difference. Let's build something amazing together.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl glass-card transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      {link.href.startsWith('#') ? (
                        <button
                          onClick={() => {
                            const element = document.querySelector(link.href);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <GradientDivider />

          {/* Bottom Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Marc Herilala. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of coffee</span>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Built with Next.js & Tailwind CSS</span>
              <span>•</span>
              <span>Deployed on Vercel</span>
            </div>
          </motion.div>

          {/* Easter Egg */}
          <motion.div
            className="text-center text-xs text-muted-foreground/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p>
              "The best way to predict the future is to create it." - Peter Drucker
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};