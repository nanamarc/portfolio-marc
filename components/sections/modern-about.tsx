"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Lightbulb, Users, Target, Award, Coffee } from 'lucide-react';
import { ModernCard, FeatureCard } from '../ui/modern-card';
import { SectionDivider } from '../ui/section-divider';

export const ModernAbout: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    { number: "3+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "∞", label: "Cups of Coffee", icon: Coffee },
    { number: "100%", label: "Client Satisfaction", icon: Users },
  ];

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices and industry standards.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills and a collaborative mindset.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-radial-light dark:bg-gradient-radial-dark" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Users className="w-4 h-4" />
              About Me
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-primary">
              Passionate Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into exceptional digital experiences through innovative 
              web development and creative problem-solving.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <ModernCard variant="glass" className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I'm a passionate web developer specializing in <span className="text-primary font-semibold">backend development</span> while 
                      being equally comfortable with <span className="text-accent font-semibold">frontend technologies</span>. 
                      My journey in tech has been driven by curiosity and a love for creating solutions that matter.
                    </p>
                    
                    <p>
                      I thrive in collaborative environments where ideas come to life through teamwork, 
                      but I'm also capable of independently managing projects from conception to completion. 
                      Every challenge is an opportunity to learn and grow.
                    </p>
                    
                    <p>
                      My commitment to continuous learning ensures that I stay current with emerging 
                      technologies and best practices, always striving to deliver better solutions 
                      and exceed expectations.
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground">Key Milestones</h4>
                    <div className="space-y-3">
                      {[
                        { year: "2021", event: "Started Web Development Journey" },
                        { year: "2022", event: "First Full-Stack Project" },
                        { year: "2023", event: "Specialized in Modern Frameworks" },
                        { year: "2024", event: "Building Innovative Solutions" },
                      ].map((milestone, index) => (
                        <motion.div
                          key={milestone.year}
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.1 }}
                        >
                          <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {milestone.year.slice(-2)}
                          </div>
                          <span className="text-muted-foreground">{milestone.event}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </ModernCard>
            </motion.div>

            {/* Right Column - Stats & Features */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <ModernCard variant="neumorphism" className="p-6 text-center group hover:shadow-glow transition-all duration-300">
                      <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
                      <div className="text-2xl md:text-3xl font-bold text-gradient-primary mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </ModernCard>
                  </motion.div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Skills Preview */}
          <motion.div variants={itemVariants} className="text-center">
            <ModernCard variant="gradient" className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Core Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "TypeScript", "React", "Next.js", "Node.js", "Python", 
                  "Java", "Spring Boot", "PostgreSQL", "MongoDB", "Docker"
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(14, 165, 233, 0.2)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </ModernCard>
          </motion.div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <SectionDivider variant="wave" className="mt-20" />
    </section>
  );
};