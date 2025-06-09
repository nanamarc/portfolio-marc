"use client";

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Calendar, Github, Linkedin, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ModernCard } from '../ui/modern-card';
import { ModernButton } from '../ui/modern-button';
import CalendlyPopupWidget from '../EmbededCalendly';

export const ModernContact: React.FC = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    user_email: '',
    message: ''
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          'service_0c26xub',
          'template_36p1a6j',
          formRef.current,
          'tfoD6HZBFSUMPsbfQ'
        );
        setShowToast(true);
        setFormData({ user_email: '', message: '' });
        formRef.current.reset();
        
        setTimeout(() => setShowToast(false), 5000);
      } catch (error) {
        console.error('Failed to send email:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "herilala1818@gmail.com",
      href: "mailto:herilala1818@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+261 38 30 621 50",
      href: "tel:+261383062150",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Androndra, Antananarivo",
      href: "#",
      color: "from-purple-500 to-pink-500"
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/MarcHerilala",
      color: "hover:text-gray-600 dark:hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/marc-razanajatovo",
      color: "hover:text-blue-600"
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: "Portfolio",
      href: "#",
      color: "hover:text-primary"
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-primary">
              Let's Work Together
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm here to help you create amazing digital experiences. 
              Let's discuss your project and make it happen.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <ModernCard variant="gradient" className="p-8 md:p-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Interested in My Profile?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Schedule a meeting to discuss your project requirements, timeline, and how we can work together 
                  to achieve your goals.
                </p>
                <motion.div
                  className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <Calendar className="w-6 h-6 text-primary" />
                  <CalendlyPopupWidget meet="Schedule a Meeting" />
                </motion.div>
              </div>
            </ModernCard>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <ModernCard variant="glass" className="p-6 group hover:shadow-glow transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white shadow-lg`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {info.icon}
                          </motion.div>
                          <div>
                            <h4 className="font-semibold text-foreground">{info.label}</h4>
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              target={info.href.startsWith('mailto') || info.href.startsWith('tel') ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </ModernCard>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-foreground">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl glass-card transition-all duration-300 ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div variants={itemVariants}>
                <ModernCard variant="neumorphism" className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-foreground font-medium">Available for new projects</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Currently accepting new client work and interesting project collaborations.
                  </p>
                </ModernCard>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <ModernCard variant="glass" className="p-8">
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                    <p className="text-muted-foreground">
                      Have a project in mind? Let's discuss how we can work together.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="user_email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="user_email"
                        name="user_email"
                        required
                        value={formData.user_email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                  </div>

                  <ModernButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={loading}
                    rightIcon={!loading ? <Send className="w-5 h-5" /> : undefined}
                    glow
                    className="w-full"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </ModernButton>
                </form>
              </ModernCard>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <ModernCard variant="glass" className="p-4 bg-green-500/10 border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Send className="w-3 h-3 text-white" />
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Message sent successfully!
                </span>
              </div>
            </ModernCard>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};