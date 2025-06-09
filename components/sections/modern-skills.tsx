"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Globe, Server, Smartphone, PenTool as Tool } from 'lucide-react';
import { ModernCard } from '../ui/modern-card';

export const ModernSkills: React.FC = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Frontend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 75 },
        { name: "Tailwind CSS", level: 95 },
      ]
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Spring Boot", level: 85 },
        { name: "Express.js", level: 90 },
        { name: "FastAPI", level: 80 },
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 85 },
        { name: "Redis", level: 75 },
      ]
    },
    {
      icon: <Tool className="w-6 h-6" />,
      title: "Tools & DevOps",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git", level: 95 },
        { name: "AWS", level: 80 },
        { name: "Linux", level: 90 },
      ]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile & Others",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "React Native", level: 80 },
        { name: "PWA", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "WebSockets", level: 80 },
      ]
    },
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
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
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-4 h-4" />
              Technical Skills
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-primary">
              Technology Stack
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks that I use to build 
              robust, scalable, and innovative web applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <ModernCard variant="glass" className="h-full p-6 hover:shadow-glow transition-all duration-300">
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="space-y-2"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                duration: 1, 
                                delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                                ease: "easeOut"
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </ModernCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Tags */}
          <motion.div variants={itemVariants} className="text-center">
            <ModernCard variant="neumorphism" className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Additional Technologies & Concepts
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Microservices", "RESTful APIs", "GraphQL", "WebSockets", "JWT",
                  "OAuth", "CI/CD", "Testing", "Agile", "Scrum", "TDD", "Clean Code",
                  "Design Patterns", "Performance Optimization", "SEO", "Accessibility"
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.03 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </ModernCard>
          </motion.div>

          {/* Learning Section */}
          <motion.div variants={itemVariants} className="text-center">
            <ModernCard variant="gradient" className="p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Technology evolves rapidly, and I'm committed to staying current with the latest 
                  trends, frameworks, and best practices in web development.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  {["AI/ML Integration", "Web3", "Serverless", "Edge Computing", "WebAssembly"].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ModernCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};