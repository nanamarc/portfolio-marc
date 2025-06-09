"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Filter, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { ModernCard } from '../ui/modern-card';
import { ModernButton } from '../ui/modern-button';
import { Projects } from '../ProjectList';

export const ModernProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const projects = Projects();
  
  // Add categories to projects
  const categorizedProjects = projects.map(project => ({
    ...project,
    category: project.title.toLowerCase().includes('app') ? 'web-app' : 
              project.title.toLowerCase().includes('website') ? 'website' : 'web-app',
    technologies: project.title === "Innova APP" ? ["React", "AI", "TypeScript"] :
                 project.title === "Patrimoine" ? ["React", "Chart.js", "Node.js"] :
                 project.title === "e-car" ? ["React", "Next.js", "MongoDB"] :
                 project.title === "Mada green" ? ["React", "Environment", "Education"] :
                 project.title === "restaurant website" ? ["HTML", "CSS", "JavaScript"] :
                 project.title === "air pollution" ? ["Data Analysis", "Looker Studio"] :
                 project.title === "wallet" ? ["React", "Finance", "Dashboard"] :
                 ["React", "JavaScript", "CSS"]
  }));

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Apps' },
    { id: 'website', label: 'Websites' },
  ];

  const filteredProjects = filter === 'all' 
    ? categorizedProjects 
    : categorizedProjects.filter(project => project.category === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Filter className="w-4 h-4" />
              My Work
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient-primary">
              Featured Projects
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, featuring innovative solutions and creative implementations 
              across various technologies and domains.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex gap-2 p-2 bg-muted/50 rounded-2xl">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {displayedProjects.map((project, index) => (
                <motion.div
                  key={`${project.title}-${filter}`}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="group"
                >
                  <ModernCard variant="hover-lift" className="h-full overflow-hidden">
                    {/* Project Image */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Action Buttons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.link && (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                        <motion.button
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Project Link */}
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                          whileHover={{ x: 5 }}
                        >
                          View Project
                          <ArrowRight className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </ModernCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show More Button */}
          {!showAll && filteredProjects.length > 6 && (
            <motion.div variants={itemVariants} className="text-center">
              <ModernButton
                variant="outline"
                size="lg"
                onClick={() => setShowAll(true)}
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Show All Projects ({filteredProjects.length - 6} more)
              </ModernButton>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <ModernCard variant="gradient" className="p-8 md:p-12">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Have a Project in Mind?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I'm always excited to work on new challenges and bring innovative ideas to life. 
                  Let's discuss how we can create something amazing together.
                </p>
                <ModernButton
                  variant="primary"
                  size="lg"
                  glow
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start a Project
                </ModernButton>
              </div>
            </ModernCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};