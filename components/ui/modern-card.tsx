"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ModernCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'neumorphism' | 'gradient' | 'hover-lift';
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  variant = 'default',
  className,
  hover = true,
  glow = false,
}) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300";

  const variantClasses = {
    default: "bg-card border border-border rounded-2xl shadow-sm",
    glass: "glass-card rounded-2xl",
    neumorphism: "neu-card rounded-2xl",
    gradient: "bg-gradient-to-br from-card via-card to-muted/50 border border-border rounded-2xl shadow-lg",
    'hover-lift': "bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1",
  };

  const glowClasses = glow ? "shadow-glow hover:shadow-glow-lg" : "";

  return (
    <motion.div
      className={cn(
        baseClasses,
        variantClasses[variant],
        glowClasses,
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export const ProjectCard: React.FC<{
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  link?: string;
  className?: string;
}> = ({ title, description, image, tags, link, className }) => {
  return (
    <ModernCard variant="hover-lift\" className={cn("group cursor-pointer", className)}>
      <div className="relative">
        {image && (
          <div className="aspect-video overflow-hidden rounded-t-2xl">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {description}
          </p>
          
          {tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {link && (
            <motion.a
              href={link}
              className="inline-flex items-center text-primary hover:text-accent transition-colors"
              whileHover={{ x: 5 }}
            >
              View Project
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          )}
        </div>
      </div>
    </ModernCard>
  );
};

export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}> = ({ icon, title, description, className }) => {
  return (
    <ModernCard variant="glass\" className={cn("p-6 text-center group", className)}>
      <motion.div
        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white"
        whileHover={{ rotate: 5, scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </ModernCard>
  );
};

export const TestimonialCard: React.FC<{
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
}> = ({ quote, author, role, avatar, className }) => {
  return (
    <ModernCard variant="neumorphism\" className={cn("p-6", className)}>
      <div className="mb-4">
        <svg className="w-8 h-8 text-primary/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>
      <p className="text-foreground mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <h4 className="font-bold text-foreground">{author}</h4>
          <p className="text-muted-foreground text-sm">{role}</p>
        </div>
      </div>
    </ModernCard>
  );
};