"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Server, Shield, Smartphone, Database, Zap, ArrowRight } from 'lucide-react';
import { ModernCard, FeatureCard } from '../ui/modern-card';
import { ModernButton } from '../ui/modern-button';
import { SectionDivider } from '../ui/section-divider';

export const ModernServices: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive, and user-friendly interfaces using modern frameworks like React, Next.js, and Vue.js with pixel-perfect designs.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust, scalable server-side applications with efficient APIs, database management, and cloud integration for optimal performance.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Microservices"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Authentication",
      description: "Implementing comprehensive security measures, authentication systems, and data protection protocols to ensure your application is secure.",
      features: ["JWT Authentication", "Role-based Access", "Data Encryption", "Security Audits"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Developing mobile-optimized applications that provide seamless experiences across all devices and screen sizes.",
      features: ["Progressive Web Apps", "Mobile Optimization", "Touch Interfaces", "Offline Functionality"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Solutions",
      description: "Designing and implementing efficient database architectures with proper indexing, optimization, and data modeling.",
      features: ["SQL & NoSQL", "Data Modeling", "Performance Tuning", "Backup Strategies"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Enhancing application speed, reducing load times, and optimizing resource usage for the best user experience.",
      features: ["Code Splitting", "Lazy Loading", "Caching Strategies", "Bundle Optimization"],
      color: "from-yellow-500 to-orange-500"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your requirements, goals, and target audience to create a comprehensive project roadmap."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating wireframes, prototypes, and technical architecture that aligns with your vision and business needs."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your application with clean, maintainable code while conducting thorough testing throughout the process."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launching your application and providing ongoing maintenance, updates, and technical support."
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30" />
      
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
              <Zap className="w-4 h-4" />
              What I Do
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-primary">
              Services & Expertise
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development services tailored to bring your digital vision to life 
              with cutting-edge technologies and best practices.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <ModernCard variant="glass" className="h-full p-6 hover:shadow-glow transition-all duration-300">
                  <div className="space-y-6">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {service.icon}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground">
                My Development Process
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A structured approach to ensure your project is delivered on time, 
                within budget, and exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative"
                >
                  <ModernCard variant="neumorphism" className="p-6 text-center h-full">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto">
                        {step.step}
                      </div>
                      <h4 className="font-bold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </ModernCard>

                  {/* Connector Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <ModernCard variant="gradient" className="p-8 md:p-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Let's discuss your ideas and create something extraordinary together. 
                  I'm here to help bring your vision to life with modern, scalable solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ModernButton
                    variant="primary"
                    size="lg"
                    glow
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Started
                  </ModernButton>
                  <ModernButton
                    variant="outline"
                    size="lg"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View My Work
                  </ModernButton>
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <SectionDivider variant="curve" className="mt-20" />
    </section>
  );
};